---
category: apps
layout: "apps-item"
published: true
title: Sound Connections
featured: true
permalink: "apps/sound-connections"
imageurl: 
  - "/img/apps/2015-03-04-SoundConnections.jpg"
tags: 
  - Pilot
  - Curation/Annotation
  - API Implementation
secondarytags: 
  - Europeana Creative
  - crowdsourcing
links: 
  - "https://www.historypin.org/en/explore/sound-connections"
  - "https://github.com/Historypin/europeana-api-ingest"

contact: 
  email: hello@historypin.org
  
---
Explore sounds from across Europe and help enrich them with contextual information and audio-visual media.

Sound Connections allows users to explore sound collections from across Europe and enrich them with comments, links, photos, videos and audio clips. Sound Connections provides four thematic pages: aviation, city soundscapes (London and Amsterdam) and birdlife. All themes can be explored by location and date and are accessible from the [Sound Connections landing page](https://www.historypin.org/en/explore/sound-connections) on historypin.org

The Europeana API was used to integrate sound assets from the two content providing Pilot partners; the British Library (BL) and the Netherlands Institute for Sound and Vision (NISV). Sound Connections is hosted on the community engagement platform Historypin, which is run by Shift Design (formerly We Are What We Do). The code for the Europeana API ingest on Historypin is available on GitHub: https://github.com/Historypin/europeana-api-ingest

Key features on Sound Connections are: 

1. Tagging feature
To add a tag to an item to help enrich it with relevant descriptive words. Any user can add a tag, it immediately appears on the item and the content owner (in this case the BL or NISV) receive an email notification detailing the tag, item and user who has added it. The tag searches, matches and autocompletes against tags already in the databases.

2. Embedding feature
Sound Connections integrates parsing of links, so that for instance title, text and image thumbnails to Europeana or Wikipedia articles or other media such as video and audio are directly embdedded and playable within the comments field. The https://code.google.com/p/jquery-oembed/ library was used for this. Embedly (http://embed.ly/) was also used to help present links better from a wide variety of sites.

Sound Connections is a Pilot developed by partners Shift, the British Library, the Netherlands Institute for Sound and Vision and Ontotext as part of the Europeana Creative project, funded under the ICT-PSP Programme.
