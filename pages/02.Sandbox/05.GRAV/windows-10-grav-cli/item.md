---
title: Setup Grav CLI on Windows 10
date: 02/12/2016 11:36am
author: Gregory Chambers
#header_image: false
taxonomy:
  category: blog
  tag: [grav, cli]

minicode:
 enabled: true
---

![Github illustration](/images/header-gitBash02@3x.png)

Admittedly, I'm a newbie at CLI but I did get Grav CLI ALMOST working on Windows 10. Over many days I was able to muddle through. I say almost as there is seemingly one remaining sticking point: after “bin/grav new-project /C/MAMP/htdocs/my-new-project” I am unable to complete the process by installing the dependencies. However, I'll leave that issue for another forum question.For others like me, here are the steps I finally came up with:

{{ 'hello.html' | minicode }}

**First Steps:**

Install MAMP for Windows — [MAMP for Windows](www.mamp.info/en/downloads/)
Install githubDesktop — [github desktop download](https://desktop.github.com/). Use Git Bash as terminal. Open destination folder and right-click. Choose “Git Bash Here” to cd directly into the correct directory.


PHP Setup: Use PHP that came with MAMP: `C:\MAMP\bin\php\php5.6.13`. Make note of this location as it will be used later when setting PATH

>>>>>NOTE: php5.6.13 folder does not contain `php.ini`.

>>>>>You'll need to copy `php.ini` from C:\MAMP\conf\php5.6.13 and paste it into C:\MAMP\bin\php\php5.6.13.

Open your newly pasted `php.ini` and verify that “php_openssl” in not commented (;) out. Restart MAMP if it is running.

**Set PATH to PHP**

Type “System” into Start search field. Choose “System -Control panel” This should open Control Panel > System and Security > System

- Click on “Advanced system settings”.
- Click on “Environmental Variables”
- Select PATH in top frame.
- Click on “Edit..”
- Click “New”
- Paste in the complete path to the MAMP php “C:\MAMP\bin\php\php5.6.13”
- Keep clicking OK until all windows are closed

Open a directory in MAMP with Grav installed. Right-click and choose Git Bash. You should be good to go. At least it works for me.

**Two speed-bumps that beginners will encounter**

Issues that will slow you down — both easily navigated.

The first issue is Windows related. MAMP will not work out of the box as it will be unable to start the Apache server and open a connection to localhost. First time you run MAMP a pop-up alert will say,

>Port already in use
>APACHE needs open port "80' which is already used by another service or application. Please configure 'APACHE' to use free port.

Easy enough to straighten out…

- Type ‘services’ into Start search field
- Click on item at top of returned list: Services – Desktop App
- Scroll down to bottom of the list and **right-click** on “World Wide Web Publishing Services”
- Click on “Stop”
- Close the Services window

MAMP will now be able to start the Servers and open a connection to localhost. Note that you will need to repeat this sequence after every computer shut-down or re-start. There are probably methods to permanently stop Windows from hogging the World Wide Web Publishing Services connection, but it's not worth my time to pursue. Apparently Windows claims this space for Skype (and probably) other things that, frankly, scare me.

**The next issue is a Grav thing**

In my ignorance, I assumed that I could simply click into MAMP htdocs, start up GitBash and create a new project with:
`$ bin/grav new-project C:/MAMP/htdocs/zzTestNewestProject`

Not so. Git Bash needs to be opened from the root of an already installed instance of Grav in order for Grav CLI to even begin working.

These are a couple of issues that slowed me down. Perhaps others can contribute the speed-bumps (with solutions) that they encountered?

