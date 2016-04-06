---
title: Markdown in HTML
date: 11:03 01/26/2016
author: Gregory Chambers
taxonomy:
    category: blog
    tag: [md, html, cookbook]
---

**Wrapping markdown into html**

Although I understand that *markdown extra* needs to be enabled in order to add html classes to img tags. For example:

```
![Rubber Ducky - alt text](Ducky_500px.png?cropZoom=200,200) {.float-right}
```
Markdown pages are very comfortable running straight HTML in addition to markdown format. Good news is that we can also do the opposite as well... insert markdown within an HTML chunk of code.

If the `user/config/system.yaml` file has not been set to run markdown extra, do that now.

```
pages:
  markdown:
    extra: true
```
Then in the wrapper tag of our html, add the parameter `markdown="1"` to activate processing of markdown content.

```
<div class="my-warpper" markdown="1">
  # my markdown content here
  this content is wrapped into a div with class of "my-warpper"
</div>
```
That&rsquo;s all that&rsquo;s needed to insert markdown into an HTML chunk.
