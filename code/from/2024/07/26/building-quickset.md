---
toc: false
title: QuickSet
style: "/type/post.css"
---

# The making of QuickSet
## [How tiny improvements add up](#post)
[`26 July 2024`](#lead) `/` [`...`](#count)

> *How I got over my fear of one-off research prototypes and make code available for reuse.*

Some have long passed their first software package publication milestone --- for me it was only as recent as 2023.
While I was investigating fuzzy text matching procedures, I faced the issue of having to frequenctly count and rank small chunks of text and compare them between two sets.

Although Javascript's native set object already provides a fast data structure compared to objects and arrays,
it lacks methods to quickly return its list of items in decreasing order of frequency (akin to a sorted map).
QuickSet is the fruits of investigating a data structure that sits in between a native set and a map,
'naively' trading memory for performance in application critical situations.

[__](#fold)

### Implementing insertion sort