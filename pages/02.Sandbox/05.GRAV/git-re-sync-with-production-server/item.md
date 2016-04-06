---
title: Re-Sync With Production Server
date: 02/04/2016 04:09pm
author: Gregory Chambers
header_image: false
#header_image_file: /user/pages/images/yellowRaceCar.jpg
#header_image_file: page->find('/images')->media['yellowRaceCar.jpg']
taxonomy:
  category: blog
  tag: [git, cli]
---
![github illustration](/images/header-gitBash02.png)

Often the production website gets out-of-sync with the Github repository (and dev site). This will typically happen during early stages of site development when files and folders are moved from one directory to the next as the site is being optimized. Changing folder location occurs quite a bit as the main menu is being built, modified or updated. Sync issues could also occur after a grav update via Admin Control Panel.

![yellow race car](cameraGirl.jpg?cropResize=200x200){.float-right}
===

The solution to this problem may seem drastic... blow away all the files currently on production and replace them with those from Github repository. This is not as daunting as it would seem on first suggestion.

**The basic steps are:**
1. open git-bash terminal in the root of the site development folder
1. use that terminal open a ssh connection to production server
1. bundle ALL the files and folders into a _junk_ directory such as `ZZZdelete`
1. move the "junk" folder out of the site root
1. use git-bash to upload files from repository up to production

**Here are the specifics:**

In git Bash: &emsp; `$ ssh s1ngaco@s1nga.com`

>>>>> Look up password for s1nga cPanel in LastPass

then (RIGHT CLICK) copy/paste password: *****UabuT2%

This will open the connection. Note that it will appear that the password was not pasted into the CLI. This is not true. The password _will_ be pasted, it just won't look like it was.

Using FileZilla, create the junk folder and drag ALL the files into this folder. The drag this folder up one level to remove it from the site root directory. When finished, the directory should be **completely** empty.

At this point we would want to upload all the files from the git repository up to production.

** Open a SSH connection to remote s1nga server -- gravBlog **

```
$ cd ~/public_html
$ git clone https://github.com/namekia/gravBlog.git
```

something like the following will be returned

```
remote: Counting objects: 14, done.
remote: Compressing objects: 100% (10/10), done.
remote: Total 14 (delta 8), reused 10 (delta 4), pack-reused 0
Unpacking objects: 100% (14/14), done.
From https://github.com/namekia/gravBlog
   4909e57..6f1a5c6  master     -> origin/master
Updating 4909e57..6f1a5c6
Fast-forward
 user/pages/01.blog/sunshine-in-the-hills/item.md | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)
```

**Not Finished Yet**
Some directories had been excluded from GIT. These need to be created now. If the site was opened now, am Issues page would be displayed with 4 large red "X".  We need to create these directories not with Bash CLI:

```
$ cd ~/public_html/gravBlog
$ mkdir assets logs images user/data
```

**Manual Uploads**
A GitHub Webhook will provide automatic upload from git repository to production server. If a GitHub Webhook has not yet been established, files can be manually uploaded with the following command.

```
$ cd ~/public_html/gravBlog
$ git pull
```

