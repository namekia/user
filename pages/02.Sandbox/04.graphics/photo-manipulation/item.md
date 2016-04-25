---
title: Manipulating Images Within a Post
date: 14:19 01/18/2016
author: Gregory Chambers
summary:
  enabled: true
  size: 0
taxonomy:
    category: blog
    tag: [images, grav]
---

Image files can be manipulated in a variety of ways from within Grav. It supports image manipulation by using a number of extensions added to the image link. The following examples will be an exploration of these methods.

To begin with, images can be stored either in the same folder as the post OR in an `/images` folder that resides at `user/pages/images`.

Header images do not need to be explicitly specified -- the first image found will be inserted in the header position. With this in mind, the image needs to be named in such a way as it is seen first before the other images.

The size of this image should be 900px x 300px @ 96dpi. The file name can be specified as `image@2x.jpg`. If named in this manner, Grav will use its internal image processing capabilities and create a variety of sizes to the images folder located in the root level. DO NOT manually store images in this folder. It is reserved to auto-generated images.

## Image Manipulation
Images used within an article can be re-sized, cropped, tinted or any number of other operations. For example the code below will crop _Ducky_ to a width of 200px. The original image size is 500x546. The image is stored in the same folder as the article.

```markup
![Rubber Ducky](Ducky_500px.png?cropResize=200,200) {.float-right}
```
![Rubber Ducky](Ducky_500px.png?cropResize=200,200) {.float-right}

Note that a class of _float-left_ has been specified. This is a custom class that I added to `_custom.scss`. Classes will only work if Markdown extra has been enabled &mdash; either in page front-matter or `user/config/system.yaml`.

Another thing to be aware of is that there is some pretty heavy-duty caching being done to the content images and text. If an image alteration or name change doesn't seem to be showing any effect, it is probably a good idea to clear the cache -- either with CLI `bin/grav clear-cache` or through the Admin interface.

### Creation of thumbnail images
OK, we're going to try making some thumbnails. Is this possible? Let's find out.

Just for fun, I'm going to create an images folder outside of the article folder.

![Camera Girl](/images/cameraGirl.jpg) 

`![Camera Girl](/images/cameraGirl.jpg )`


![Camera Girl Again](/images/cameraGirl.jpg?lightbox=600,400&cropZoom=100,100)

Does this work? <br>
`![Camera Girl Again](/images/cameraGirl.jpg?lightbox=600,400&cropZoom=100,100)`

It works but is pretty boring. Only opens up the full image in a plain new page.

Let's try using a more responsive method.<br>
`![Camera Girl 2x](cameraGirl.jpg?sizes=50vw)`

![Camera Girl 2x](cameraGirl.jpg?sizes=50vw)

Invoking the image in this manner causes Grav to fire up SRCSET support. The image will re-size fluidly at various browser widths.


