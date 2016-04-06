---
title: Official Grav CLI Cheatsheet
date: 13:09 01/15/2016
author: Gregory Chambers
#banner: header-gitBash.png
taxonomy:
    category: blog
    tag: [git, cli]
---

**Issue**
Currently unable to do a fresh install of a grav instance via the CLI. Will need to pose a question in the forum asking for explicit instructions on using CLI with Windows.

[Grav Cheatsheet](http://learn.getgrav.org/advanced/grav-cli "Command line tutorial")

All of the commands listed below are compatible with any operating system.

| Command   | Description |
|:-----------|:----------
| bin/grav list| Lists all commands available in Grav (excluding the GPM). |
| bin/grav help <command> | Gives you help on a specific command. |
| bin/grav new-project <location> | Used to create a new, clean Grav instance in a different folder. Can be run from an existing Grav install. |
| bin/grav install | This command installs any dependencies needed to run your current Grav install. |
| bin/grav clear-cache | This command clears the cache of your Grav install. Options include: --all, --assets-only, --images-only, and --cache-only |
| bin/grav backup | Creates a zip backup of your current Grav site. |
| bin/grav composer | Updates manually-installed composer-based vendor packages. |
| bin/gpm list | Lists all commands available via Grav's GPM (Grav Package Manager) |
| bin/gpm help <command> | Gives you help on a specific command. |
| bin/gpm index | Shows a list of all the available resources in the Grav repository, organized by themes and plugins. |
| bin/gpm info | Displays the details of the desired package, such as description, author, homepage, etc. |
| bin/gpm install | Installs a resource from the repository to your current Grav instance with a simple command. |
| bin/gpm update | Checks installed plugins and themes for available updates and lists them. |
| bin/gpm uninstall | Removes an installed theme or plugin and cleares the cache. |
| bin/gpm self-upgrade | Enables you to update Grav to the latest version. |

