---
title: Random Color Rollovers
date: 02/10/2016 03:36pm
#banner: /images/cameraGirl.jpg
author: Gregory Chambers
taxonomy:
    category: blog
    tag: [gsap, javascript]
---

The circles below change to a random color on roll-over. This demonstrates a very cool  GSAP function which will generate random colors with javaScript from the standard web-safe 256 color palette.

Another interesting feature of this demonstration is the use of flexbox placed within another flexbox container. This Grav template already uses flexbox to define the columns of the blog post.

<div class="flex-wrap-circ-rndm">
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
</div>

Divs are specified directly in the markdown area using plain HTML.

``` html
<div class="flex-wrap-circ-rndm">
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
  <div class='circ-rndm'></div>
</div>
```

``` js
// Self-Executing Anonymous Function
(function() {

    var trgt = document.querySelectorAll('.circ-rndm');

    function rollOver() {
        TweenMax.to(this, 0.5, {
            scale: 1.2,
            backgroundColor: 'hsla(' + Math.random() * 255 + ', 90%, 60%, 1)'
                // backgroundColor: 'hsla(59, 41%, 52%, 1)'
        });
    }

    function rollOut() {
        TweenMax.to(this, 0.3, {
            backgroundColor: 'hsla(' + Math.random() * 255 + ', 90%, 60%, 1)',
            // backgroundColor: 'hsla(459, 41%, 52%, 1)',
            scale: 1
        });
    }

    for (var i = 0; i < trgt.length; i++) {
        trgt[i].addEventListener('mouseover', rollOver, false);
        trgt[i].addEventListener('mouseout', rollOut, false);
    }

})();
```

