---
title: In-line GSAP Action
date: 02/01/2016 10:53am
author: Gregory Chambers
taxonomy:
    category: blog
    tag: [gsap, javascript]
---

{assets:inline_css}
.circ {
            width: 200px;
            height: 200px;
            background: hsl(27, 84%, 50%);
            position: relative;
            border-radius: 50%;
            margin: 1rem 0;
        }
{/assets}

{assets:inline_js}

document.addEventListener("DOMContentLoaded", function(event) {
        "use strict";
            var play = document.getElementById('btn');
            var tl;

        tl = new TimelineLite({paused: true});
        tl.to('.circ', 2.0, {
            x: 300
        });
        // Use native GSAP progress, play and restart methods
        play.addEventListener('click', function() {
            if (tl.progress() < 1) {
                tl.play();
            } else {
                tl.restart();
            }
        }, false);
});

{/assets}

<div class="circ">.</div>
<button name="button" class="button" id="btn">PLAY</button>


Use the 'Assests' plugin to quickly test out little scripts directly with the the `item.md` page. When satisfied with the functioning of the script it can be removed from the originating page and pasted into the gsap scripts repository --  `
/user/pages/custom-scripts/greg-gsap.js`.

This page of scripts is loaded in the footer area through the code in `/user/themes/gregTheme/templates/partials/base.html.twig`.






