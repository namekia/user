---
title: GSAP files as Named Assets
date: 01/29/2016 11:23am
author: Gregory Chambers
taxonomy:
    category: blog
    tag: [grav, gsap]
---

Adding GSAP TweenLite and dependencies as a `named asset`.

`http://learn.getgrav.org/themes/asset-manager#named-assets`

I'm having a terrible time getting `named assets` to work properly. For example, if I add the various files needed for a minimal instance of GSAP PLUS the `custom-scripts` file, it looks as if the stuff is being inserted into the footer error, but Dev Tools reports that there is a 404 error.

Need to look into this more at some point. Right now, I'm simply loading TweenMac and the custom-scripts files as separate `.js` entities into the footer area. This is working but not as elegantly as I would like.

===

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/plugins/CSSPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/easing/EasePack.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenLite.min.js"></script>
```

Named assets allows you to register and name of a collection of CSS and JS assets. FOr example, all of the dependencies needed for TweenLite to work (including the custom scripts for specific animations) can be registered in the `/user/config/system.yaml` file.

LAter this named asset can be called in the template twig file and loaded at the bottom of the page... the whole group using only the asset "name".

```
assets:
  collections:
    gsap:
      - https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/plugins/CSSPlugin.min.js
      - https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/easing/EasePack.min.js
      - https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenLite.min.js
      - user://custom-scripts/greg-gsap.js
```

In order to actually use the scripts the named assets has to be called in the `base.html.twig` file.

`/user/themes/gregTheme/templates/partials/base.html.twig`

```
{% block bottom %}
        ...
        ...
        ...
        {% do assets.addJs('gsap',{'priority':100, 'group':'bottom', 'loading':'async'}) %}
        {{ assets.js('bottom') }}
```

This is the result as ouput to the bottom of the page in final html

`<script src="/gravBlog/gsap?g-89ce02df" type="text/javascript" async></script>`

Let's give this a try with a simple animation.
