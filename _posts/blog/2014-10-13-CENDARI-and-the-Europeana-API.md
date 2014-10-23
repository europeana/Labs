---
published: true
layout: blog-item
category: blog
permalink: blog/CENDARI-and-the-Europeana-API
title: Hunting for First World War data - CENDARI and the Europeana API
imageurl: 
  - "/img/blog/CENDARI-and-the-Europeana-API.jpg"
tags: 
  - API
  - research
secondarytags:
  - WW1
---

*By Valentine Charles (EuropeanaFoundation) and Milica Knezevic (Mathematical Institute SANU)*

[The CENDARI project](http://www.cendari.eu/) is building a virtual research environment integrating resources from libraries and archives for medieval and First World War studies. The project is currently gathering relevant data related to  the First World War to feed the knowledge base it is currently developing. These data are re-used in a set of domain ontologies and named-entity recognition tools developed to assist the research of historians.

The Europeana API offers a large dataset related to First World War, gathering  resources from [national collections](http://www.europeana-collections-1914-1918.eu/) and [film archives](http://project.efg1914.eu/), and also exceptional [primary resources collected from the public](http://www.europeana1914-1918.eu/). Collections relevant to the First World War were selected by CENDARI. The list contains a total of 289,453 records from 49 collections, out of the 33 million records available in Europeana.

In order to connect the CENDARI repository with the [Europeana API](http://labs.europeana.eu/api/introduction/), and to provide a mechanism to bring relevant content from Europeana into CENDARI, a script has been created which fetches records via the Europeana API, performs additional processing, and sends processed content to the CENDARI repository.  The import process involves several phases.

The first phase consists is collecting unique identifiers of the records from the selected collection. Since a collection may consist not only of records related to the First World War, but can mix different subjects, it is necessary to apply an additional filter in order to get only relevant records. The filter which should be added to the search query is “world war I” OR “1914-1918”. 

For instance:
To filter data relevant for WW1 out of 170,596 records in collection 08547_Ag_EU_ATHENA_Zuse-Institute_Berlin, the following search query is used

> [http://europeana.eu/api/v2/search.json?wskey=xxxxxx&query=europeana_collectionName:08547_Ag_EU_ATHENA_Zuse-Institute_Berlin&qf=%22world+war+I%22+OR+%221914-1918%22](http://europeana.eu/api/v2/search.json?wskey=api2demo&query=europeana_collectionName:08547_Ag_EU_ATHENA_Zuse-Institute_Berlin&qf=%22world+war+I%22+OR+%221914-1918%22)

 The second phase consists of retrieving data for the records gathered in the first stage. Each record can be fetched via the API in two formats, JSON and RDF (in accordance with the Europeana Data Model (EDM)  http://pro.europeana.eu/edm-documentation). Three resources are created in the CENDARI repository for each Europeana record. They correspond to the JSON representation of a record, a record in RDF format, and the original digital object. While the first two are downloaded and stored in the CENDARI repository, the third is only linked to the object at the original location given by the data provider, and not stored or cached locally, so that potential copyright issues are avoided. Original grouping of records which exist in Europeana are preserved to provide CENDARI users with an easy way to browse within a selected Europeana collection. In order to improve the quality of search on imported data, for each record the following information is extracted, if present: data provider, Europeana identifier, dc:source, dc:type, dc:subject, and dc:creator.

At the moment of writing, CENDARI has imported 22,600 EDM records. The data will be re-used within the CENDARI environment to feed the knowledge base currently developed by the project. These data will be made available to historians through various means (named-entity recognition tool, ontologies) in order for them to directly re-use these data in their research. 

The overall impression is that the Europeana API is well documented and easy to use. Thanks to the Europeana API tech team, there is [a responsive forum](https://groups.google.com/forum/#!forum/europeanaapi) for sharing ideas and suggestions, solving issues and answering questions related to the API. Note that there is a standard request limit 10,000 per day but it can be significantly increased for a single API key in specific cases (see https://groups.google.com/forum/#!topic/europeanaapi/FLh81ZbpLC0). It can also be worth noting and of interest for other API users that, although it is not currently specified in the documentation, we were able to get not only the JSON representation of the records, but also the original RDF (e.g. [http://europeana.eu/api/v2/record/9200196/BibliographicResource_3000005913596_source.rdf?wskey=xxxxxx](http://europeana.eu/api/v2/record/9200196/BibliographicResource_3000005913596_source.rdf?wskey=api2demo))
