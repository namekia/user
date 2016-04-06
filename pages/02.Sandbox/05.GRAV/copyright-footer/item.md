---
title: Copyright date (year) in footer
date: 02/26/2016 10:39am
author: Gregory Chambers
header_image: false
taxonomy:
  category: blog
  tag: [grav]
---

![graphic copyright assembly](copyright_1800.png)
![graphic copyright assembly](copyright_900.png)

A common design device for most websites is to include a copyright notice at the bottom of the web page in the footer area. The jury is out as to whether this copyright date has any legal purpose, but clients' seem to love it. However, a copyright line that is out of date can be a bad reflection on the site. 

This following PHP script automatically changes the copyright to the current year every year so that it never goes out of date. Note that the JS version works as well.

In the code there are references to `copyright1` and `copyright2`. These are bits of yaml that reside in `/user/config/site.yaml` and define the site name

>>>>> Consider breaking this out the footer as a partial?

**path to website footer:** `/user/themes/gregthemetwo/templates/partials/base.html.twig`

====

[SOURCE: Stack Exchange](http://craftcms.stackexchange.com/questions/6706/display-a-copyright-year-or-range)


```twig
{% set startYear = 2015 %}
{% set currentYear = now|date("Y") %}

{% if startYear == currentYear %}
    {% set copyrightYears = startYear %}
{% else %}
    {% set copyrightYears = startYear ~ ' - ' ~ currentYear %}
{% endif %}
{% if site.copyright %}
    {{ site.copyright.text1 }} &copy; {{ copyrightYears }} &nbsp; <a href="{{ site.copyright.url }}">{{ site.copyright.text2}}</a>
{% endif %}
{% if site.copyright2 %}
    <br>
    {{ site.copyright2.text1 }} &nbsp; <a href="{{ site.copyright2.url }}">{{ site.copyright2.text2}}</a>
    {% else %}
        <br><a href="http://getgrav.org">Grav</a> was <i class="fa fa-code"></i> with <i class="fa fa-heart"></i> by <a href="http://www.rockettheme.com">RocketTheme</a>.
{% endif %}

    </div>
    <div class="copyright-right">
         JS version  &copy; <script>document.write(new Date().getFullYear()); </script> &nbsp; gChambers
    </div>
</div>
```
