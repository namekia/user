---
title: innerHTML
date: 15:51 01/12/2016
author: Gregory Chambers
taxonomy:
    category: blog
    tag: [javascript, innerHTML, UI]
---


**a project inspired by Tony de Araujo**

Ever wonder how you could change the contents of an HTML element? Maybe you'd like to replace the text in a paragraph to reflect what a visitor has just selected from a drop down box. By manipulating an element's innerHtml you'll be able to change your text and HTML as much as you like.

Each HTML element has an innerHTML property that defines both the HTML code and the text that occurs between that element's opening and closing tag. By changing an element's innerHTML after some user interaction, you can make much more interactive pages.

However, using innerHTML requires some preparation if you want to be able to use it easily and reliably. First, you must give the element you wish to change an id. With that id in place you will be able to use the getElementById function, which works on all browsers.

We can use innerHTML either to retrieve the current content of the container or to insert new content into that container. Let's look at some examples. Here's are a div container that we might have in our HTML.

```markup
<div class="part2">
<h3>Standard Method (DOM Level 2)</h3>
<p>What method is used to make an item "click-able"?
  <br><i id="reply1">Click for Answer!</i>
</p>
<p>Is there a JavaScript method equivalent to css :hover?
  <br><i id="reply2">Click for Answer!</i>
</p>
<p>What methods are used to reveal and alter HTML?
  <br><i class="reply3 color">Click for Answer!</i>
</p>
</div>
```

>>> **Security Warning:** Improper handling of the ```innerHTML``` property can enable script-injection attacks. When accepting text from an untrusted source (such as the query string of a URL), use ```createTextNode``` to convert the HTML to text, and append the element to the document using ```appendChild```.

===

<div class="part2">
<h3>Standard Method (DOM Level 2)</h3>
<p>What method is used to make an item "click-able"?
  <br><i id="reply1">Click for Answer!</i>
</p>
<p>Is there a JavaScript method equivalent to css :hover?
  <br><i id="reply2">Click for Answer!</i>
</p>
<p>What methods are used to reveal and alter HTML?
  <br><i class="reply3 color">Click for Answer!</i>
</p>
</div>

** Note when calling JavaScript using the Grav ```assets``` plugin **

Assets plugin requires that the inline code be placed within a ```DOMContentLoaded``` wrapper because the code is inserted into the head of the document -- before the HTML is loaded. This wrapper is the vanilla JavaScript equivalent to jQuery's ```documentReady``` functionality.

The most useful property of our web page objects that we can access is not a part of the official standard at all. The innerHTML property was introduced by Microsoft in Internet Explorer as a convenient way of being able to access the entire content of the HTML container all at once. It turned out to be so convenient that all of the other browsers quickly added support for this property.

{assets:inline_css}
.part1,
  .part2 {
      border: 1px dotted gray;
      margin-bottom: 1em;
      padding: 1em;
  }
  .part2 i {
      cursor: pointer;
  }
  .color:hover {
      color: seagreen;
  }
  .txtAlter {
      color: maroon;
      font-size: 1.5em;
      font-weight: bold;
  }
  .txtBolder {
    font-weight: bold;
  }
{/assets}

{assets:inline_js}
// MDN-- The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets and images to finish loading
document.addEventListener("DOMContentLoaded", function(event) {
        "use strict";
        var answer1 = document.getElementById("reply1");
        var qNapoleon = function() {
            answer1.innerHTML = '"addEventListener" allows click and hover functionality';
            answer1.classList.toggle('txtBolder');
        };
        answer1.addEventListener('click', qNapoleon, false);

        var answer2 = document.getElementById("reply2");
        var qDriver = function() {
            answer2.innerHTML = "Yes! 'mouseover' and 'mouseout' can be used.";
        };
        answer2.addEventListener('click', qDriver, false);
        answer2.addEventListener('mouseover', function() {
            answer2.style.color = "brown";
        }, false);
        answer2.addEventListener('mouseout', function() {
            answer2.style.color = "forestgreen";
        }, false);

        var p2 = document.querySelector('.part2');
        var answer3 = document.querySelector(".reply3");
        var qPark = function() {
            answer3.innerHTML = "classList and addEventListener can be used together";
            answer3.classList.toggle('txtAlter');
        };
        answer3.addEventListener('click', qPark, false);
});
{/assets}
