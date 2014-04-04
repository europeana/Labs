---
category: apps
layout: "apps-item"
published: true
title: PATHSenrich
featured: false
permalink: apps/PATHSenrich
tags: 
  - R&D results
links: 
  - "http://www.paths-project.eu/"
  - "http://explorer.paths-project.eu/"
  - "http://ixa2.si.ehu.es/paths_wp2/paths_wp2.pl"
imageurl: 
  - "/img/apps/PATHSenrich/PATHS demo.jpg"
contact: 
  name: "For more information, or to give feedback, please contact [Arantxa Otegi](arantza.otegi@ehu.es)".
---
**PATHSenrich** – A web service prototype developed by [PATHS]http://www.paths-project.eu/ project allowing independent content providers to enrich their cultural heritage at item level.
The aim of PATHS project is to enable exploration and discovery within cultural heritage collections. In order to support this, the project developed a range of enrichment techniques which augmented these collections with additional information to enhance users's browsing experience. The semantic enrichment techniques developed in PATHS are summarised in [this document](http://www.paths-project.eu/eng/Resources/Semantic-Enrichment-of-Cultural-Heritage-content-in-PATHS), which details how these techniques are applied to the Europeana data. The demonstration system developed for PATHS that uses the content from Europeana is available[here](http://explorer.paths-project.eu/). 

The full enrichment functionality is for the moment only available for internal use alone, but the University of the Basque Country (UPV/EHU) has developed a web service which provides a selected subset of the enrichment functionality. At present, the service enriches the any item provided to Europeana described using the Europeana Data Model (EDM) with two types of information:
* links to related items in the PATHS collection (as subset of Europeana)
* links to related Wikipedia articles

To use this web service, access [http://ixa2.si.ehu.es/paths_wp2/paths_wp2.pl](http://ixa2.si.ehu.es/paths_wp2/paths_wp2.pl), enter one cultural heritage item represented following the EDM in JSON format as exported by the [Europeana API v2.07](http://preview.europeana.eu/portal/api-introduction.html)(a sample record is provided in the interface). Then click "Process" to get the output. The enrichment is performed by analysing the title and descriptions in the metadata associated with the item. The output is returned both as a list of human-readable URLs and XML.

Note that the service is currently a proof-of-concept, not for extensive use. The [LoCloud](http://www.locloud.eu/) project is currently developing the web service further. The new project will aim at improving the quality of the enrichment (e.g. links to Wikipedia), provide additional functionality and alternative input/output formats.

URL for the prototype:[http://ixa2.si.ehu.es/paths_wp2/paths_wp2.pl](http://ixa2.si.ehu.es/paths_wp2/paths_wp2.pl) 

A paper presented at TPDL 2013 providing more details on the tool can be found at:[http://www.paths-project.eu/eng/Resources/Publications/EHU_2013_TPDL_demo](http://www.paths-project.eu/eng/Resources/Publications/EHU_2013_TPDL_demo)

