---
title: Useful GRAV CLI commands
author: Gregory Chambers
date: 01/18/2016 10:26am
#banner: header-gitBash.png
taxonomy:
    category: blog
    tag: [git, cli]
---

**Watch SCSS folder** for changes to: `_custom.scss`

A _separate_ gitBash CLI needs to be opened from within the **theme root directory**,  NOT the site root directory.

Watch scss folder for changes: <br>
`$ scss --watch scss:css-compiled`

Clear cache (localhost)<br>
`bin/grav clear-cache`

To get a list of all the commands available in Grav, you can run the command:<br>
`$ bin/grav list`

To get help for a specific command, you can prepend help to the command:<br>
`$ bin/grav help install`

Style overrides or additions should be made in the _custom.scss file<br>
`$/user/themes/gregTheme/scss/template/_custom.scss`

**NOTE: THE INFORMATION BELOW IS NOT CORRECT. WILL NEED TO BE RE-WRITTEN AT A LATER DATE**

**Creating a new project**
Navigate to htdocs and create a new folder with project name. Open that folder and right-click inside. Choose "Git Bash Here".<br>
`$ bin/grav new-project C:\MAMP\htdocs\zzTestNewestProject`

The command above _will_ work but there is still a persistant issue that NEEDS to be solved. Unable to complete the task of adding the needed dependencie files:

```
Pages Initializing
    C:\MAMP\htdocs\gravBlog/user/pages -> Created
    mappings: /.editorconfig does not exist!

install should be run with --symlink|--s to symlink first
```


