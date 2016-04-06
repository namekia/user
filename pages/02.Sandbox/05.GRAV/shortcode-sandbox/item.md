---
title: Shortcode Sandbox
date: 03/02/2016 2:58pm
author: Gregory Chambers
header_image: false
taxonomy:
  category: blog
  tag: [grav, plugins, shortcode]
---

![kids swimming](shortcodeKids.jpg)

Let's try a built-in core shortcode. The following shortcode will add an underline to some text. The third [u]word[/u] is underlined. OK, now we are going to try a modified shortcode that I put together.

This one will turn the selected text bold and red. The trigger will be... (can't show you). Your chain [bld]refines our vetted dilemma[/bld] of monkeys behind holes.

>>>>Stumbling Block #1 -- code-highlighting the trigger prior to running the shortcode caused it not to fire. Took me hours to figure that out!!

Shortcodes are defined in a `.php` file that is located in the `shortcode-core` plugin folder. For example, the shortcode demonstrated above is: `/user/plugins/shortcode-core/shortcodes/BoldRedShortcode.php`.

>>>>>There seems to be a major issue with the 'blubox' shortcode. Whenever it appears "above the fold" it causes the article header photo and intro text to disappear from the "recent items listing" on the home page. Moving this shortcode below the fold solves this. Simple shortcodes don't seem to cause this unwanted behavior.

OK, lets try another one that's a bit more ambitious. This one is called BlueBox. My intent was to be a bit more ambitious with this one. I wanted to call a `.html.twig` as a partial.  However, I ran into an issue when the partial file was not recognized. A nice blue debugger screen was displayed instead. Obviously, I need to study more working `shortcode` examples.

In any case the example below was created by pasting the `html` directly into `BlueBoxShortcode.php`.

[blubox]This is the content that we're going to insert into the nested blue box. Interested to find out what will happen. Probably nothing.[/blubox]

Yet another shortcode &ndash; this one build on the previous two. We'll call this one `RedBoxShortcode.php` and it'll live at `/user/plugins/shortcode-ui/shortcodes/RedBoxShortcode.php`. I'm going to investigate the advice given by @rhukster with regard to adding a separate `twig` file. The twig file should allow for more complex coding. &ndash; or not.

[redbox]Your scion abstracted our robot, very pint. Her bill bound his javaScript's pug. Their sense's Asheville forged the paper's surface. In the future, a Chicago of science calls my grin. Once upon a time, warm home of boss makes might until toolkit. But before that, a rich key considers the hilarious worm concerning values.[/redbox].

Surprisingly, the shortcode above seems to work! Now let's add some more custom elements.

[greenbox]Her bill bound his javaScript's pug. Their senses Asheville forged the paper's surface. In the future, a Chicago of science calls my grin. Once upon a time, warm home of boss makes might until toolkit. But before that, a rich key considers the hilarious worm concerning values.[/greenbox].

**This is frigg'n incredible!** I've actually created my own plugin! Using @rhukster's code, of course, but still &endash;, this is a first for me! I'm obviously very excited.

The green box above is generated through the `GreenBoxShortcode.php` shortcode this located in the `shortcode-greg` directory which, in turn, is in the plugins directory.
