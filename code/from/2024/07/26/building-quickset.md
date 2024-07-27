---
toc: false
title: Building QuickSet
style: "/type/post.css"
---

# The making of QuickSet
## [Getting over code fright](#post)
[`26 July 2024`](#lead) `/` [`...`](#count)

> *How I got over my fear of coding one-off research prototypes and make QuickSet available for reuse.*

Some have long passed their first software package publication milestone. For me it was only as recent as 2023.
For the longest time, even the idea of learning to code seemed dizzying, despite doing ample data analysis and visualisation work.
It was as if I wanted to prove you could do complex computations without ever touching the abstract bits.
Spoiler: I eventually picked it up and started investigating fuzzy text matching procedures some time after.
While prototyping an Obsidian plugin, I faced the issue of having to frequenctly count and rank small chunks of text and compare them between two sets.

Although Javascript's native set object already provides a fast data structure compared to objects and arrays,
it lacks methods to quickly return a ranked list of items in decreasing order of frequency (akin to a sorted map).
[`QuickSet`](https://www.npmjs.com/package/@suptxt/quickset) is the result of me investigating a data structure that sits in between a native set and a map,
'naively' trading memory for performance in application critical situations.
If you're a more wintered developer, there is no doubt much to pry apart.
I am not sure the resulting data structure is a even set or counts as a data structure in the traditional sense.

But it's how I got over my fear of code.

[__](#fold)

### Sorting as you go
My first exposure to Javascript was years ago, in the form of *GAS* -- Google Apps Script.
Wondering whether more complex text processing functions were possible in Google Sheets,
I set out to implement a word n-gram counter in Apps Script itself.
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

### Making it count
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

### Making the list
At this point I'd come up with some requirements for producing a ranked list of word chunks as users edited their notes:

1. Words and sentences needed to be represented as numbers somehow, as operating on numbers is more performant than operating on strings
2. A top-k list of chunks would have to be available at all times, not completely sorted *but* at least containing the most frequent chunks
3. It needed to have very little computational overhead as to not block downstream tasks.

Never before had I implemented such things. 
Just a as little did I know about the many that had gone before me solving these exact things.
Although I had some experience with JavaScript at this time from building [Observable notebooks](https://observablehq.com) in the year-and-a-half before, never did I make the jump from formalising the (often disorganised) notebooks into something more reusable.
For instance, why someone would use `classes` in their code eluded me.
It just seemed a needlessly complex way to collect 

### From note to notebook
I felt comfortable enough with the language basics but it had been a long road to get there.


### From code to class(book)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk4Nzk0ODY4MCwxNTExNTM2Njc2XX0=
-->