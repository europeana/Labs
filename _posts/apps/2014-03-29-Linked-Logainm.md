---
category: apps
layout: "apps-item"
published: true
title: Europeana Linked Open Data feeds Irish place name database
featured: false
permalink: apps/Linked-Logainm
tags: 
  - Linked Open Data
links: 
  - "http://apps.dri.ie/locationLODer/"
  - "http://data.logainm.ie/sparql](http://data.logainm.ie/sparql"
  
imageurl: 
  - "/img/apps/Linked-Logainm/Image of the website.png"

contact: 
  name: "For more information, or to give feedback, please contact: Rebecca Grant,[Digital Repository of Ireland](http://www.dri.ie/) and Nuno Lopes,[INSIGHT @ NUI Galway](http://www.insight-centre.org/)"
  
---

**Europeana Linked Open Data feeds Irish place name database**

*With the input from Rebecca Grant,[Digital Repository of Ireland](http://www.dri.ie/) and Nuno Lopes,[INSIGHT @ NUI Galway](http://www.insight-centre.org/).*

The Linked Logainm dataset and Location LODer website were launched on 10 September 2013 by Jimmy Deenihan, TD, Minister for Arts, Heritage and the Gaeltacht at the National Library of Ireland.

Logainm.ie, the bilingual database of Irish place names has recently been enhanced by the **Linked Logainm** project by incorporating Linked Data. The newly available Linked Logainm dataset provides Irish place name data in structured, computer-readable formats for use by web developers, computer scientists, the heritage community, information professionals and more. The linked dataset is now ready for use by Irish information professionals in the library, museum and archives domains.

The project was undertaken collaboratively by the Digital Repository of Ireland (DRI), INSIGHT@NUIGalway (formerly the Digital Enterprise Research Institute), Fiontar at Dublin City University, the National Library of Ireland and the Placenames Branch of the Department of Arts, Heritage and the Gaeltacht of the Irish Government.

As well as transforming the geographic Logainm dataset to Linked Data, the project team also developed the demonstrator website [Location LODer](http://apps.dri.ie/locationLODer/locationLODer). Location LODer is built on the Linked Logainm dataset and a map interface, allowing users to explore content and digital resources relating to locations across Ireland. Selecting a place name on the map loads the available content, sourced from logainm.ie, DBpedia, the National Library of Ireland's Longfield Maps collection, the Irish Historic Towns Atlas project and Europeana. Location LODer aims to demonstrate how Linked Data technologies can enhance the catalogues of Irish cultural institutions.

Location LODer gathers information using different SPARQL and Linked Open Data endpoints where available - namely <strong>Europeana</strong> and DBpedia. The Europeana SPARQL endpoint available at [http://europeana.ontotext.com/sparql](http://europeana.ontotext.com/sparql) is used to retrieve objects that might relate to Irish place names. When a specific place name is selected in Location LODer, the Europeana SPARQL endpoint is queried for any objects that contain both the selected place name and its county name as a ‘dc:subject' and a ‘spatial' property of ‘Ireland'. Results are retrieved in JSON format to be rendered in the appropriate section of the website.

A similar approach is applied to the DBpedia endpoint at [http://dbpedia.org/sparql/](http://dbpedia.org/sparql/), however for this endpoint we rely on previously determined links that are included in the Logainm dataset. The MARC records for the National Library of Ireland's Longfield Map Collection were enhanced to include links to the newly created Linked Logainm URIs, and this information is used to retrieve the maps relevant to the place name the user has selected. A short presentation on the process of creating the Linked Logainm dataset and the enhancing of the MARC records was presented at the First Workshop on Linking and Contextualizing Publications and Datasets (presentation is available at [http://www.slideshare.net/nunoalexandrelopes/presentation-26782239](http://www.slideshare.net/nunoalexandrelopes/presentation-26782239)").

The dataset is available at [http://data.logainm.ie/sparql](http://data.logainm.ie/sparql), and the demonstrator Location LODer is at [http://apps.dri.ie/locationLODer/](http://apps.dri.ie/locationLODer/).
