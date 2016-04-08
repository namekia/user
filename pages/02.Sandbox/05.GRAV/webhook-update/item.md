---
title: Auto-Update Webhook — Part 2
date: 04/07/2016 11:06am
author: Gregory Chambers
# header_image: false
taxonomy:
  category: blog
  tag: [grav, github]
---

[attrb]unsplash[/attrb]

###Revised approach to configuration

OK, the first time I tried the GitHub automatic webhook it didn't work out so well. The intent is to automatically upload to the production server any changes or additions made to items located in `/user` folder. Although it seemed to function properly at first, my initial attempt failed completely after a Grav update.

This time I&rsquo;ve re-configured the webhook to only upload items that reside in the `/user` directory. As of yesterday afternoon it seems to be working. I'll try to document the steps taken during the configuration process. I say _attempt_ because I spent a good deal of time whacking the configuration with a blunt stick.

The **big take-away** is that the file `___github-webrefresh.php` had to be placed in the root folder NOT `/user` as I had originally suspected.

Although the doc is quite old at this point, I made significant use of Andy Miller&rsquo;s article on [Grav Development with GitHub](https://getgrav.org/blog/developing-with-github-part-2).

Note that the following details assume that:
1. a functioning website has already been set up and is running on `localhost`
1. a GithHub account has already been established

###From localhost to GitHub.com

[figur width="one-half" position="fig-left" image="webhook-update/2016-04-07_12-07-05.png" cite="screenshot"]When creating the new repository in the GitHub desktop client, be sure to supply the path to the **/user** folder.[/figur]

Open your GitHub desktop client and click on the **+** button located in upper-left corner. The click on the **Add** tab. Final step is to supply the path the `/user` folder. The localhost site will be residing in `C:\MAMP\htdocs`. This is step one. We next need to to **Publish** this repository to GitHub.com.

When clicking on the `Publish` button there will be a pop-up displayed. Don't change the Name field but do provide a short description of the repository. When this information has been input click on the `Push Repository` button. Head over to `github.com` and the new repository _should_ be displayed. Great! The localhost version of the site is now on GitHub.

###cPanel SSH

**Set up SSH access to the web server by configuring it in cPanel.**

The GitHub automatic webhook requires having SSH access to the web server. SSH Certificates need to be generated and stored on the web server. Open the cPanel of the hosting account and scroll down to the **Security** section. Click on the **SSH Access** link. This is where certificates are generated, stored and downloaded. The advantage of setting up the SSH certificate here is that it then enables us to create a webhook for the newly created GitHub repository. An added bonus is that we can now use the command line interface (CLI) to open a ssh connection to the production server without needing to enter a password every time.

![cPanel screenshot](2016-04-07_14-39-39.png?cropZoom=600,200)

dsfsdf




