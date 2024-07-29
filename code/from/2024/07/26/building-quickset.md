---
toc: false
title: Building QuickSet
style: "/type/post.css"
---

# The making of QuickSet
## [Getting over code fright](#post)
[`26 July 2024`](#lead) `/` [`words`](#count)

> *How I got over my fear of coding one-off research prototypes and make QuickSet available for reuse.*

Some have long passed their first software package publication milestone. 
For me it was only as recent as 2023.
The longest time, even the idea of learning to code seemed dizzying, despite having done ample data analysis and visualisation work before then.
It was as if I wanted to prove you could do complex computations without ever touching the abstract bits.
As an undergrad I elected multiple Intro to Comp-Sci classes but never made it past the first classes as I couldn't keep up with the rate my peers just seem to 'get it'.
Spoiler: After many years of bumping my head and kicking my feet, I eventually managed to pick up some cursory programming and started investigating fuzzy text matching procedures soon after.

While prototyping an Obsidian plugin that tracks changes as you write, I faced the issue of having to frequenctly count and rank small chunks of text and compare them between two sets.
Although Javascript's native set object already provides a fast data structure compared to objects and arrays,
it lacks methods to quickly return a ranked list of items in decreasing order of frequency (akin to a sorted map).
[`QuickSet`](https://www.npmjs.com/package/@suptxt/quickset) is the result of me investigating a data structure that sits in between a native set and a map,
'naively' trading memory for performance in application critical situations. It allows you to go from a list of unordered numbers:


```js
import QuickSet from "npm:@suptxt/quickset";
let numbers = Array.from({length:200},()=>parseInt(Math.random()*10))

display(numbers)
```

To a ranked representation:

```js
let minRange = view(Inputs.range([0,numbers.length],{label:'Iterations',step:1,value:0}))
```

<!--
```js

  
  let set = new QuickSet({
      
        // integer range 
           span: 10,
        // amount of top-k slots
           slot: 8,
        // minimum counting threshold
           freq: 0,
        // maximum counting threshold
           high: 256,
        // overwrite items when tied
           fifo: false
      
    });
  
  for (let i = 0; i <  minRange; ++i) {
    set.minsum(numbers[i]);
  }

```

```js
const name = Generators.observe((notify) => {
  const inputted = () => notify(set.top());
  inputted();
  minRange;
});
```
```js
name
```-->


If you're a more wintered developer than I, there is no doubt much to pick apart.
I am not sure the resulting data structure even counts as a set or a data structure in the traditional sense.

But it's how I got over my fear of code.

[__](#fold)

## Sorting as you go
My first exposure to Javascript was years ago, in the form of *GAS* -- Google Apps Script.
Wondering whether more complex text processing functions were possible in Google Sheets,
I set out to implement a word association counter in Apps Script itself.
It did not work out.

As I was coding my research data during the summer of ‘17 (as in, assigning 'codes' or categories to a bunch of texts), I tried many NLP tools to see whether coding texts by hand could be sped up.
I had specific but in hindsight basic requirements: it needed to ingest .txt files and export .csv's
do basic textual preprocessing and allow user codes to be assigned to word clusters and collected in a knowledge graph. 
I couldn't code (but mostly didn't want to) so a GUI was a must.

If you were in social sciences, linguistics or related fields at the time, this would likely have sounded familiar.
Besides some well-known point-and-click offerings, project specific requirements meant you had to find your inner hacker and glue together various tools and executables and pass data by hand.
Juggling various large .csv files meant getting a full picture of my research data was difficult, slowing down progress as a result.

Each time new codes had been assigned, I had to manually feed the latest data into [WORDij](https://www.wordij.net/), an open-source word association tool I used to generate text graphs.
Sorting through all the data became a chore as I couldn't easily get an aggregate view of the all the codes I had since assigned.
By the time I managed to get through coding my data and generate some fancy charts, I vouched to never again 'code' anything by hand.

Six years later I would be doing a very different kind of coding. 
But the idea of keeping your data sorted as you go stuck with me as I navigated these foreign worlds of code.
What if we could keep our datasets neat and tidy each time we added a new observation?

[...](#rest)

## Make it count
Say you have a long list of word chunks, how would you go about counting the most frequent ones?
Depending on your requirements, this can be as trivial or complex as you want it to be.
If time is not a concern, you can simply go over the list one-by-one and keep count of all the chunks you have encountered.
If accuracy is not a concern, you could skip counting each nth chunk to get a an approximate sample of the most frequent ones.
But what if they are both a concern?

There exist all sorts of ingenious methods that allow you to (approximately) count and rank a set of items, which I won't go into here.
Some approaches are faced by *indeterminacy* as they utilise randomisation to get to their final result.
Others *parallelise* counting by dividing the input into smaller groups.
As Obsidian is an Electron app, the latter of approaches could be ruled out, as JavaScript is single threaded.
Meaning groups can only be counted one after the other while blocking other tasks (with exceptions).

The former were ruled out as I was looking into methods that reliably produced the same result each time---comparing word chunks *before* and *after* the user would input text in the note editor.
This way, I could produce a consistent *diff* (difference) between the state of a note as it was before a user edited it and after.
Naively, and as a first attempt, I simply counted all word chunks of a note before and after each edit.
For small notes this is trivial, but the amount of chunks that needed to be compared between edit events scaled linearly with the length of a note.

And as I was writing my thesis in Obisidian, some notes could become very long indeed. Could we devise a method that keeps track of frequent chunks as users edit their notes?

## What's this path?
At this point I'd come up with some requirements for producing a ranked list of word chunks as users edited their notes:

1. Words and sentences needed to be represented as numbers somehow, as operating on numbers is more performant than operating on strings
2. A top-k list of chunks would have to be available at all times, not completely sorted *but* at least containing the most frequent chunks
3. It needed to have very little computational overhead as to not block downstream tasks.

Never before had I implemented such things.
Little did I know about the many that had gone before me solving these exact things.
Although I had some experience with JavaScript at this time from building [Observable notebooks](https://observablehq.com) in the year-and-a-half before, never did I make the jump from formalising the (often disorganised) notebooks into something more reusable.
For instance, why someone would use `classes` in their code eluded me.
It just seemed a needlessly complex way to combine JavaScript functions into a --- what exactly?

There just seemed to many ways to represent my list of requirements as code with clear intent.
How did it get to this point?

### From tab to table
I felt comfortable enough with the language basics by now but it had been a long road to get there.
During my master's and early PhD (2016-19), Google Sheets + RAW Graphs had been my goto for data analytical needs.
Having data and methods side by side, freely assignable to a seemingly infinite grid unlocked many doors.
I was especially fond of Sheet's ability to do array operations, which meant you could define a function in a single cell and apply it to a range of cells anywhere in your spreadsheet---something Microsoft Excel had implemented but felt less ergonomic to use at the time.
The `query` function also had leg up when it came to more complex filtering and sorting operations.
I've built various tool using just these inbuilt functions, from heat maps to corpus processors and text graph extractors.

Sheets can be like catnip to early coders, as you get accustomed to columnar data formats without even realising it.
By writing complex queries over and over, I was implicitly learning another skill: translating data processing needs into a formal query, not unlike SQL.
The first time I came across Google Bigquery, I wasn't as dumbfounded as I was years earlier when I encountered Apps Script.
To my surprise, switching from the tabs of a spreadsheet to the tables of a Bigquery database went smoother  than expected
When tasked with designing a query to extract bipartite graphs from a large dataset of social media interactions with news posts, the ways in which  SQL allows you to name and split more complex queries into simpler subqueries the generate datatables felt like an immediate improvement over its tab-based counterpart. 

### From note to notebook
A little before stepping into SQL land, I had encountered another piece of influential software that I use to this day. Enter Obsidian. 
Late 2020, I struggled housing my research notes and citations under one roof, for which Qiqqa had served me well.
Until I had to do some actual writing that is, as exporting your notes wasn't the most straightforward experience.
I don't remember how exactly I came across Obsidian, but it seemed a breath of fresh air in note-taking land.
As many before me, I caught the Obsidian bug and spent hours finicking the interface to my needs, exploring the hundreds of user plugins that allow you to customise pretty much anything of the note-taking app.

This meant becoming proficient in its base language Markdown, of which the base syntax isn't too complicated, but has some interesting ways in which it is parsed and converted into a final marked-up HTML page for reading and exporting to PDf.
Days were lost on trying to come up with a writing system where I wanted to add a timestamp to *each* and every sentence I wrote, not only for bookkeeping but mostly to see whether notes could be linked together by time of writing in Obsidian's Graph View. I exercised Obsidian's developer console to investigate the app's internals---good practice as the provided console is the very same used by Chromium/Electron based apps.

Copy-pasting snippets from the web to modify Obsidian's interface elements became my initiation to JavaScript.
Whereas 'objects' never really clicked in my previous excursions into the language, now it became what was meant by the language's credo *everything is an object*: 
from the smallest pieces of data to the comprehensive built-in methods to process them, objects allow the layered organisation of all these things by binding them in any which way you like.
This freedom of compositing abstract objects is dizzying at first, as the same data and methods can be referenced anytime, anywhere and can be part of multiple objects. 
You have to develop a feeling for where things originate, which can be especially complicated for complex apps as Obsidian.

As I got increasingly comfortable with the execution flow of both Obsidian and the dev console, another weight was unknowingly lifted: my discomfort of command line interfaces.
Previously, I'd only ever used CMD and Powershell to troubleshoot my device and run rudimentary programs, often frightened by the speed at which you're bombarded with system and error messages after inputting a command.
But by jumping in and out of the Obisidian dev console, it made realise command based interfaces are just that: a shell for inputting and outputting commands.
As I wanted to sync my notes between different devices, I quickly settled on git to synchronise my notes with a GitHub account.
Altough Obsidian has a built-in sync service, the draw of free syncing + version control had me spending lots of time figuring out how to install git clients on different (mobile) devices and headbreaking over its countless commands.

You can see the pattern: coding for me never starts with coding but almost exclusively an unrelated goal.
Whereas in previous years I'd almost have to force myself to sit down to grasp even the simplest snippets of code, now understanding and writing code was merely an intermediary to a goal.
It's a feeling that no course, lecture or tutorial had been able to tease out.
It's the very feeling that made me fall in love with Observable---a collaborative platform where code gets out of your way and it's simply you, a notebook and a global (JavaScript) window.

### From window to class
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwMDAwNTA5NjQsLTE4MTMyMjQ4NjQsLT
UyMTYyMTU1NiwtNTU3NDI4ODM3LC0xNDMyNTMwMzI5LC01MDEw
ODc1ODIsLTIwMjc4Njg3OTksNTgxMjA2NzE5LC05NzA3NDM4OD
gsMTUxMTUzNjY3Nl19
-->