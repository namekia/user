---
title: GitHub Code Notes &mdash; Remote Server
date: 11:30 01/06/2016
author: Gregory Chambers
banner: header-gitBash.png
taxonomy:
    category: blog
    tag: [git, cli]
---

>>>> Code to be pasted into Git Bash for Setup and Usage of GitHub for Site Development

** Open a SSH connection to remote s1nga server -- gravBlog **

In git Bash:

`$ ssh s1ngaco@s1nga.com`

1. Look up password for s1nga cPanel in LastPass

then (RIGHT CLICK) copy/paste password: *****UabuT2%
This will open the connection. Note that it will appear that the password was not pasted into the CLI. This is not true. The password _will_ be pasted, it just won't look like it was.

If problems with the files on production (for example, after a grav update via Admin), then the production files can be removed (or moved up one level). At that point we would want to upload all the files from the git repository up to production.

```markup
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
**this is the manual process of uploading changes from the GitHub account to the remote server**

The code below is reference to the `___github-refresher.php` file that is necessary for the GitHub Webhook to operate. Note that `___github-log.txt` is also necessary. If re-loading an existing GitHub repository, these files will be automatically included.
```
~/public_html/___github-refresher.php
```

```
<?php
date_default_timezone_set('America/Chicago');
ignore_user_abort(true);
set_time_limit(0);

$repo          = '~/public_html/gravBlog';
$branch        = 'master';
$output        = array();

// update github Repo
$output[] = date('Y-m-d, H:i:s', time()) . "\n";
$output[] = "GitHub Pull\n============================\n" . shell_exec('cd '.$repo.' && git pull origin '.$branch);

// redirect output to logs
file_put_contents(rtrim(getcwd(), '/').'/___github-log.txt', implode("\n", $output) . "\n----------------------------\n", FILE_APPEND);
```

to test:

```
$ php ___github-refresher.php
From https://github.com/namekia/gravBlog.git
 * branch            master     -> FETCH_HEAD
```
