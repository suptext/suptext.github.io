---
toc: false
title: QuickSet
style: "/type/post.css"
---

# The making of QuickSet
## [Getting over code fright](#post)
[`26 July 2024`](#lead) `/` [`...`](#count)

> *How I got over my fear of one-off research prototypes and make QuickSet available for reuse.*

Some have long passed their first software package publication milestone. For me it was only as recent as 2023.
While I was investigating fuzzy text matching procedures, I faced the issue of having to frequenctly count and rank small chunks of text and compare them between two sets.

Although Javascript's native set object already provides a fast data structure compared to objects and arrays,
it lacks methods to quickly return a ranked list of items in decreasing order (akin to a sorted map).
[`QuickSet`](https://www.npmjs.com/package/@suptxt/quickset) is the result of investigating a data structure that sits in between a native set and a map,
'naively' trading memory for performance in application critical situations.

[__](#fold)

### Sorting as you go
My first exposure to Javascript was years ago, in the form of Google Apps Script.
Wondering whether more customisable text processing functions were possible in Google Sheets,
I set out to implement a word n-gram counter in Apps Script itself.
It did not work out.

As I was coding my research data during the summer of ‘17 (as in, assigning 'codes' or categories to a bunch of texts), I tried many NLP tools to see whether coding each text by hand could be sped up.
I had specific (but in hindsight, simple) requirements: tools needed to ingest .txt files and export .csv's
do basic textual preprocessing and allow user codes to be assigned to certain phrases. 
I couldn't code (but mostly, didn't want to) so a GUI was a must.

If you're in social science, linguistics or the like, this will probably sound familiar.
Just run-of-the-mill stuff.