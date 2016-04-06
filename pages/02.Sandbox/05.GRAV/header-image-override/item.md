---
title: Header (hero) Image Over-Ride
date: 02/12/2016 9:58am
author: Gregory Chambers
header_image: false
taxonomy:
  category: blog
  tag: [grav, images, graphics]
---

![sandbox fun](/images/playground1600.jpg)

OK, I've found some solutions to the graphic design scenarios that I was trying to overcome. The difficulties occurred specifically in the Grav Blog Site template. Other templates may or may-not exhibit the same behavior.

I was able to find a suitable yaml "block" (correct term?) that allows me to turn off the automatic generation of the large header (hero) image at the top of post. Was also able to then substitute the auto-created image with one of my choosing located in `user/pages/images`. Keep in mind that, in general, I welcome the auto-generation of the header image.

Occasionally, however, I wish to over-ride this behavior. Here are explanations of the various scenarios.

**Scenario 1:**  Turn off auto-generation of header image.

Default behavior of the blog items is to look for the first image in the folder that contains `item.md` and make it a header image. Doesn't matter what that image is or whether it's appropriate or not.

I was looking for a solution that could be easily applied via the yaml frontmatter on a page-by-page basis. After poring over the relevant code in `/user/themes/gregTheme/templates/partials/blog_item.html.twig` I came to the realization that adding `header_image: false` to the list of items in yaml frontmatter might do the trick. It did indeed. Now I have a method to turn off this behavior at will.

![yellow race car](yellowRaceCar.jpg?cropResize=200x200){.float-right}

**Scenario 2:** Insert smaller illustrative images without worrying about duplication in the header of the first image.

Now that I've instructed the page to not create a header image, I can add smaller images throughout the blog post. For example, `![yellow race car](yellowRaceCar.jpg?cropResize=200x200){.float-right}`.

**Scenario 3:** Add a header image from another folder.

If I later change my mind an decide that that blog post does, indeed, need a header, the markdown image code can be placed at the top of the article (below the yaml blocks) It will behave exactly like the auto-generated header image.

```
![snappy illustration](/images/header-snappy.png)
```

**One more note regarding images in posts...**
Be sure to create the graphics at twice the largest anticipated dimension. Then save with maximum compression. For `jpeg` out of Photoshop that would be "0" quality. For `png` save as 8-bit with the fewest number of colors.

Finally save the file as: `myImage@3x.jpg`. Note that the "@3x" bit is not included when you specify the file name inside the post. Grav will automate the re-sizing of the images for optimal use at various browser widths and device pixel depths. This is actually a very good manifestation of the responsive images initiative with the intent to trim the fat from our web pages.
