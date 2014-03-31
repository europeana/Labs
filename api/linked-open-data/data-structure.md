---
layout: api-page
title: Data structure
---

This page provides information on how the metadata served by data.europeana.eu is organised. It assumes that the reader has extensive knowledge of [Linked Data](http://linkeddata.org/) technology. The project has also been described in the [technical paper](http://dcevents.dublincore.org/index.php/IntConf/dc-2011/paper/view/55) presented at the Dublin Core 2011 conference.

**Disclaimer:** Many aspects documented in this page are experimental and thus remain open for discussion and change. 

### Background - The Europeana Data Model (EDM)

The Europeana Data Model was designed to replace the Europeana Semantic Elements (ESE). EDM will gradually make Europeana fit within a networked data environment. It is a much more flexible and precise model than ESE, and offers the opportunity to attach every statement to the specific resource it applies to, and to reflect some basic form of data provenance. The main EDM requirements include:

* distinguishing between a &#39;provided item&#39; (painting, book) and its digital representations
	
* distinguishing between an item and the metadata record describing it

* allowing the ingestion of multiple records for the same item, which may contain contradictory statements about it

As a consequence of EDM having to meet these requirements, EDM data has a level of complexity above that which Europeana currently maintains. This level of complexity is comparable to what can be found in the data of many Europeana providers, and thus, we argue, it enables better exploitation of that data. Note also that, as much as possible, EDM re-uses elements coming from already-established vocabularies, such as Dublin Core, OAI-ORE, SKOS and CIDOC-CRM, thus lowering the cost of its creation and, hopefully, its adoption.</p>

For more information on EDM, we refer to the *EDM Definitions* and *EDM Primer* on Europeana&#39;s [technical documents](http://pro.europeana.eu/edm-documentation) page. The EDM OWL ontology is accessible through content negotiation but it is also [directly available](https://github.com/europeana/corelib/blob/master/corelib-solr-definitions/src/main/resources/eu/rdf/edm.owl). Please be aware that both data.europeana.eu and those documents are under constant revision. There could therefore be some (minor) discrepancies between them!

### Generating EDM data for Europeana

Currently, Europeana does not harvest metadata in the EDM format. We thus had to convert legacy ESE data into EDM. This entails creating resources for the main EDM classes, and distributing ESE metadata fields over these various resources, as presented in this [mapping](http://europeanalabs.eu/wiki/EDMPrototypingTask15). The resulting data does not realise the full potential offered by EDM but it allows us to make some distinctions, which we believe are useful for data consumers.

Additionally, data.europeana.eu includes semantic connections to external (linked data) sources. We serve links to other linked data services already maintained by Europeana providers - currently only the Swedish cultural heritage aggregator (SOCH). The vast majority of external links come from semantic enrichment realised at the Europeana Office, connecting Europeana items to places (as provided by [GeoNames](http://geonames.org)), concepts (from the [GEMET](http://www.eionet.europa.eu/gemet) thesaurus), persons (from [DBpedia](http://dbpedia.org)) and time periods (from an adhoc time period vocabulary).


### A walk through the resources served at data.europeana.eu</h4>
The core EDM classes, together with the properties we expect to be applied to their instances, are presented in these [templates](http://europeanalabs.eu/wiki/EDMObjectTemplatesEuropeana). Of course it is unrealistic that all of those properties would be available for any single object exposed in Europeana. This is especially true for items that are described using the simple legacy ESE format. In particular, Europeana does not currently harvest any description for contextual entities, such as concepts, agents and places. Still, the ESE data harvested from Europeana providers, as well as the enrichment work by Europeana, allows us to create and describe a network of EDM resources for every Europeana object, as shown in this [big picture example](http://www.few.vu.nl/~aisaac/edm/ese2edm_mapping.png). The following explains in more detail the data that can be found for every class of resource served by data.europeana.eu:

**Item (Provided Cultural Heritage Object)**: Item resources represent objects (painting, book, etc.) for which institutions provide digital representations to be accessed through Europeana. Provided Cultural Heritage Object (CHO) URIs (for example,  [http://data.europeana.eu/item/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03](http://data.europeana.eu/item/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03), ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Fitem%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)) are the main entry points in data.europeana.eu. A provided CHO is the hub of the network of relevant resources (cf. below). When applicable, the Europeana URIs for these objects also link, via &#39;owl:sameAs&#39; statements, to other linked data resources about the same object, for example&nbsp;[this item](http://data.europeana.eu/item/91622/1BF8BC466E65367929379C83FC639F27961ACD18)([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Fitem%2F91622%2F1BF8BC466E65367929379C83FC639F27961ACD18)). In this Linked Data pilot, no descriptive metadata (creator, subject, etc.) is directly attached to item URIs. It is instead attached to the *proxies* that represent a view of the object, from a specific institution&#39;s perspective (either a Europeana provider or Europeana itself). Depending on the feedback received during this pilot, we may change this and duplicate all the descriptive metadata at the level of the item URI. Such an option is costly in terms of data verbosity, but it would enable easier access to metadata for data consumers less concerned about provenance.

