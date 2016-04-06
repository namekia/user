---
title: Markdown Basics
date: 04/01/2016 11:20am
author: Gregory Chambers
header_image: false
taxonomy:
  category: blog
  tag: [grav, Markdown]
---

![photo: musical score](DayneTopkin01-1200x400.jpg) <br>
[attrb]Dayne Topkin | unsplash[/attrb]

## TLDR

My primary text creation tool is SublimeText. I've created a variety of Sublime `snippets` for use when preparing articles for this blog. Here are a few of them:

* **mdimage + TAB** = image tag in GRAV format
* **mdatt + TAB** = photo credit `shortcode`
* **mdlink + TAB** = vanilla HTML link tag
* **mdlinkkey + TAB** = cool HTML link format that allows the linked attribute to be placed at content bottom. Useful when a lengthly URL would disrupt the flow of the paragraph text.
* **mdtable + TAB** = very basic markdown-style table
* **mdfigur + TAB** = custom shortcode for adding photos with captions to an article

# Main headings (H1) are _cool_.

## Sub-heads (H2) are not so bad either.

I **love you**.

Greg is **_really_ cool**. Really he is.

### This is an example of Heading 3

Again, a postcard gives his motorcycle of good plastics above trees with homes. Because of, bill shakes her sweater. But who folded your lucky art? Gently, our meme of science works hipster below comment. Fully loved, the dog of vinyl records times touch throughout state.

[this is a link to Greg's site](http://gchambers.com "This is the alert pop-up")

```markdown
[this is a link to Greg's site](http://gchambers.com "This is the alert pop-up")
```

Here is a pretty cool feature. Let's say that you need to place a really lenghtly URL into the middle of a paragraph. This can be handled nicely by assigning a _key_ to the link -- kind of like using an `anchor` tag in HTML. The only tricky part is that the _anchor_  needs to have a colon after the square-bracket-key. Take a look at the example below.

This is a sentence that happens to [contain a link][1] that is really long.

[1]: http://gchambers.com

```
This is a sentence that happens to [contain a link][1] that is really long.
[1]: http://gchambers.com
```

### OK. Now let's work with some images.

![This is ALT txt](http://unsplash.it/500/500?random  "this is the tool tip")

```
![This is ALT txt](http://unsplash.it/500/500?random  "this is the tool tip")
```

![ALT txt](female-fan-300.jpg?cropZoom=200,100)

```
![ALT txt](female-fan-300.jpg?cropZoom=200,100)
```

![ALT txt](http://unsplash.it/250/250?image=1012&classes=someClass,anotherClass)

```
![ALT txt](http://unsplash.it/250/250?image=1012&classes=someClass,anotherClass)
```

