---
title: Enable GZIP Compression
date: 17:39 01/09/2016
author: Gregory Chambers
taxonomy:
    category: blog
    tag: [grav, config]
---

 There was an issue when gzip compression was enabled on production server. This caused the localhost server (MAMP) to throw an error.
Solution:
create a configuration file just for localhost.

```user/localhost/config/system.yaml```
```
cache:
  gzip: false                  # GZip compress the page output
```

Meanwhile the primary over-ride in located:

```user\config\system.yaml```

```
cache:
  enabled: true
  check:
    method: file
  driver: auto
  prefix: 'g'
  gzip: true
```
