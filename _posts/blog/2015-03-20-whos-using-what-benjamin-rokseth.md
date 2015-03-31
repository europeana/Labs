---
published: true
layout: blog-item
category: blog
permalink: blog/whos-using-what-benjamin-rokseth
title: Who's Using What - Benjamin Rokseth Developer Profile
imageurl: 
  - "/img/blog/2015-03-20-whos-using-what-benjamin-rokseth.jpg"
tags: 
  - FLOSS
secondarytags:
  - RDF
  - Koha
---
For this edition of “Who’s Using What?” we head north to Oslo where Benjamin Rokseth is working with The Digital Development
Team at the Oslo Public Library. The [Oslo Public Library](https://www.deichman.no/side/in-english) is currently in a transitional phase as they prepare for the grand opening of what will be an [astonishingly beautiful building](http://blogg.deichman.no/nyedeichman/) on the Oslo waterfront. But with a beautiful new building comes the
need for a progressive CMS and a new and improved way for local visitors and researchers as well as internationals alike seeking to access the library’s collection. The Oslo Public Library decided to make a big change their new
library system on the well known OSS, [Koha](http://www.koha.org/). You can read all about the transition in [this fascinating piece](http://digital.deichman.no/blog/2015/01/12/working-with-koha-at-oslo-public-library/). Rokseth is an OS
champion and for any library’s looking to make the switch from an old CMS to Koha, hopefully his answers and insights will
provide some guidance. For more info you can investigate his personal [Github](https://github.com/bensinober) and the [Digital Development Team’s blog](http://digital.deichman.no/) and [Github](https://github.com/digibib) . 

##1. What open source tools are you currently working with? 

Today, our public library is migrating from a proprietary library system to the community driven Koha, which is open source in
all respects. The main focus for the present is on the development workflow and continuous integration, and in that respect we
use [Jenkins](http://jenkins-ci.org/) as staging/integration tool and [SaltStack](http://saltstack.com/) and [Docker](https://www.docker.com/) for the entire deployment/setup process. For functionality testing we use [Cucumber](https://cukes.info/), and [Watir](http://watir.com/) for browser testing. Everything neat and open source.

## 2. What open source tools have you used in the past to develop larger applications?

Actually, I have never used anything but open source, so the list would be too long to display. As long as there exists an open
source alternative, it is to be preferred.

## 3. What are you currently developing? 

Since the focus is on testing and continuous integration for the moment, we are not developing much at present. Mostly we focus
on building APIs to integrate our various services to the Koha library system.

## 4. What would you like to see developed? 

We are strongly encouraging a move towards linked data (RDF) in the public sector, so we would like to see a growth in developnt
of open source tools to propagate this move. There are numerous alternatives, but we have yet to see a clear open source
alternative for working with bibliographic metadata.
