---
toc: false
title: Scraping the barrel
style: "/type/post.css"
---

# Scraping the barrel
## [Getting research data from the heap](#post)
[`15 March 2024`](#lead)` > ICA 2024 Post-API Conference` `/` [`...`](#count)

> *The iron grip of Chrome has become a major factor in how the web is structured and accessed. 
> ‘Manifest V3’, the not-so-private ‘Privacy Sandbox’ and ‘Ad Topics’ all seem to serve the interests of a single parent — Google.*

While the company’s grip seems to tighten at the surface, Chrome’s Dev Tools still provides developers and researchers unprecedented access to the V8 engine and Chromium runtime. 
At a moment when websites and platforms are turning to increasingly draconian anti-scraping measures, Chrome’s browser Console and Network profiling tabs as well as its DOM, Sources and Property inspectors provide more than enough handles to deconstruct and navigate any complex page or web app.

But with WASM on the horizon the ways in which apps and sites are structured today may soon be out of the (global) window. 
Instead of operating on the standard Document Object Model, developers can now pre-compile and run any type of (binary) source code in a sandboxed browser environment and render the output to a canvas, obfuscating the internals and becoming even more difficult to reverse-engineer. 

Hence, meet your next best friend: *the heap*. Introduced as a way to track to performance issues and memory leaks, Chrome allows you to take snapshots of everything that it currently holds in memory. 
While at glance, the output seems difficult to navigate it contains all the data that has gone into building the webview before you—wouldn’t it be great if we could use this somehow for our scraping needs?

In this lightning demo, I will demonstrate some strategies for dealing with the heap and getting structured data out. 
This involves setting up a local or remote puppeteer endpoint and getting familiar with the basic heap layout, as well as comparing different snapshots to find the structured data of interest. 
While this method allows you to circumvent many anti-scraping measures, it comes at a cost: you may generate hundreds of megabytes just navigating and storing a single page or app. 
But the more researchers are delegated to scraping the platform barrels, the more creative we have to become to navigate the heap.
Or at least, until another sandbox is built around it.

[_](#exit)

## Links
`Cooney, Adrian (2022) > `[*`Web scraping via Javascript Heap Snapshots`*](https://www.adriancooney.ie/blog/web-scraping-via-javascript-heap-snapshots)
