// MDN: The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets and images to finish loading -->
// document.addEventListener("DOMContentLoaded", function(event) {
//         "use strict";
//             var play = document.getElementById('btn');
//             var tl;

//         tl = new TimelineLite({paused: true});
//         tl.to('.circ', 2.0, {
//             x: 600
//         });
//         // Use native GSAP progress, play and restart methods
//         play.addEventListener('click', function() {
//             if (tl.progress() < 1) {
//                 tl.play();
//             } else {
//                 tl.restart();
//             }
//         }, false);
// });

// MDN: The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets and images to finish loading
document.addEventListener("DOMContentLoaded", function(event) {
        "use strict";
            // Code Here


    function getMatrixTimeline() {
        var sqr01 = document.getElementsByClassName('sqr01');
        var sqr02 = document.getElementsByClassName('sqr02');
        var sqr03 = document.getElementsByClassName('sqr03');
        var sqr04 = document.getElementsByClassName('sqr04');

        var tl = new TimelineMax({
            repeat: 3
        });
        tl
            .set('.matrix-sqr', {
                visibility: 'hidden'
            })
            .to(sqr01, 0.4, {
                autoAlpha: 0,
                yoyo: true
            })
            .to(sqr02, 0.4, {
                autoAlpha: 0,
                yoyo: true
            })
            .to(sqr04, 0.4, {
                autoAlpha: 0,
                yoyo: true
            })
            .to(sqr03, 0.4, {
                autoAlpha: 0,
                yoyo: true
            });
        return tl;
    }

    function getArcsTimeline() {
        var segments = document.getElementById('el-a');
        var gradientArc = document.getElementById('el-g');

        var tl = new TimelineMax();
        tl
            .from(".circ-wrap", 1.5, {
                autoAlpha: 0
            })
            .to(segments, 3, {
                rotation: -180,
                repeat: 1,
                ease: RoughEase.ease.config({
                    strength: 0.5,
                    points: 10
                })
            })
            .to(gradientArc, 5, {
                rotation: 360,
                repeat: 1,
                ease: Power0.easeNone
            }, 0);
        return tl;
    }

    function getLoadingValueTimeline() {
        var numberDisplay = document.getElementById('numberDisplay');
        var txtLoading = document.getElementsByClassName('txt-loading');
        var displayValue;
        var finalValue = 10001;

        function showValue() {
            displayValue = Math.floor(Math.random() * finalValue);
            numberDisplay.innerHTML = displayValue;
        }

        var tl = new TimelineMax();
        tl
            .from(numberDisplay, 9, {
                onUpdate: showValue,
                autoAlpha: 0,
                // repeat: 1,
                yoyo: true,
                ease: Power4.easeOut
            })
            .from(txtLoading, 2, {
                autoAlpha: 0,
                yoyo: true,
                repeat: 4
            }, 0);
        return tl;
    }

    function getCheckpointTimeline() {
        var txtChckpnt = document.getElementsByClassName('txt-chckpnt');

        var tl = new TimelineMax();
        tl
            .from(txtChckpnt, 1.5, {
                autoAlpha: 0,
                color: 'hsl(-=90, +=0%, +=0%)',
                // yoyo: true,
                repeat: 4
            });
        return tl;
    }

    function getReplayButton() {
        var rePlay = document.getElementById('replay');

        var tl = new TimelineMax();
        tl
            .from(rePlay, 1, {
                autoAlpha: 0
            });

        rePlay.addEventListener('click', function() {
            if (mainTimeline.progress() < 1) {
                mainTimeline.play();
            } else {
                mainTimeline.restart();
            }
        }, false);
        return tl;
    }

    var mainTimeline = new TimelineMax();
    mainTimeline
        .add(getMatrixTimeline())
        .add(getArcsTimeline(), 'label1')
        .add(getLoadingValueTimeline(), 'label1')
        .add(getCheckpointTimeline(), 'label1+=2')
        .add(getReplayButton(), 'label2')
        .to(".circ-wrap", 0.75, {
            autoAlpha: 0
        }, 'label2-=1');
});

// MDN: The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets and images to finish loading
// document.addEventListener("DOMContentLoaded", function(event) {
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
// });
