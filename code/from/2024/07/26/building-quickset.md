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
For the longest time, even the idea of lea
While I was investigating fuzzy text matching procedures, I faced the issue of having to frequenctly count and rank small chunks of text and compare them between two sets.

Although Javascript's native set object already provides a fast data structure compared to objects and arrays,
it lacks methods to quickly return a ranked list of items in decreasing order (akin to a sorted map).
[`QuickSet`](https://www.npmjs.com/package/@suptxt/quickset) is the result of investigating a data structure that sits in between a native set and a map,
'naively' trading memory for performance in application critical situations.

[__](#fold)

### Sorting as you go
My first exposure to Javascript was years ago, in the form of *GAS* -- Google Apps Script.
Wondering whether more complex text processing functions were possible in Google Sheets,
I set out to implement a word n-gram counter in Apps Script itself.
It did not work out.

As I was coding my research data during the summer of ‘17 (as in, assigning 'codes' or categories to a bunch of texts), I tried many NLP tools to see whether coding texts by hand could be sped up.
I had specific (but in hindsight basic) requirements: tools needed to ingest .txt files and export .csv's
do basic textual preprocessing and allow user codes to be assigned to sections and phrases and collected in a knowledge graph. 
I couldn't code (but mostly didn't want to) so a GUI was a must.

If you were in social sciences, linguistics or related fields at the time, this would likely have sounded familiar.
Besides some well-known point-and-click offerings, project specific requirements meant you had to find your inner hacker-spirit and glue together various tools and pass data by hand.
Juggling various large .csv files meant getting a full picture of my research data was difficult, slowing down progress as a result.

Each time new codes were assigned by hand, I had to manually feed the latest data into [WORDij](https://www.wordij.net/), an open-source word association tool I used to generate text graphs.
Sorting through all the data became a chore as I couldn't easily get an aggregate view of the all the codes I had since assigned.
By the time I managed to get through coding my data and generate some fancy charts, I vouched to never ever again 'code' anything by hand.

Six years later I would be doing a very different kind of coding. 
But the idea of keeping your data progressively sorted as you go never left my mind. 
What if we could keep our datasets ranked and tidy each time we'd add a new observation?

[...](#rest)

### Counting where it counts
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTI1Nzk0MTUxN119
-->