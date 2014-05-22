---
layout: apps-item
category: apps
permalink: /apps/portal-thingy
title: "Portal Thingy"
imageurl:
  - "/img/apps/Portal%20Thingy/portal_thingy.fw.png"
tags:
  - Hackathon Prototype
  - Annotation
  - Search
links:
  - http://hack4europe.kbresearch.nl/
contact: 
  name: "Clemens Neudecker, René van der Ark, (both from National Library of Netherlands)"
---

Winner in the category 'Developers' Pick' at Hack4Europe '12 - Belgium. The Portal Thingy is a prototype search portal which offers users the chance to enrich Europeana metadata.

 It demonstrates how to plug in (remote) open APIs for on-the-fly named entity recognition and linking of geolocations using cross domain ‘Ajax' calls (JSONP). Enrichments can be stored and retrieved again as JSON. The user can send multiple searches to Europeana, stacking the search results. On an individual search result named entity recognition can be started by using the ‘Named Entities' tab and the results can be stored using buttons. The user can also pin geo-locations as enrichments to the record using the ‘Geo-location' tab and view all the enrichments using the ‘View Enrichments' tab. All functionality, both client- and server-side, was written in JavaScript, using – among other things – the following libraries: Nodejs (for the server), Mongodb (for storage), Jquery (for cross-domain JSONP and local Ajax) and Faye/Cometd (for real time browser to browser messaging).
