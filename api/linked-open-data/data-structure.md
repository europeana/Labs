---
layout: api-page
title: Data structure
---

This page provides information on how the metadata served by data.europeana.eu is organised. It assumes that the reader has extensive knowledge of [Linked Data](http://linkeddata.org/) technology. The project has also been described in the [technical paper](http://dcevents.dublincore.org/index.php/IntConf/dc-2011/paper/view/55) presented at the Dublin Core 2011 conference.

**Disclaimer:** Many aspects documented in this page are experimental and thus remain open for discussion and change. 

## Background - The Europeana Data Model (EDM)

The Europeana Data Model was designed to replace the Europeana Semantic Elements (ESE). EDM is now gradually making Europeana fit within a networked data environment. It is a much more flexible and precise model than ESE, and offers the opportunity to attach every statement to the specific resource it applies to, and to reflect some basic form of data provenance. The main EDM requirements include:

* distinguishing between a &#39;provided item&#39; (painting, book) and its digital representations
	
* distinguishing between an item and the metadata record describing it

* allowing the ingestion of multiple records for the same item, which may contain contradictory statements about it

As a consequence of EDM having to meet these requirements, EDM data has a level of complexity above that which Europeana currently maintains. This level of complexity is comparable to what can be found in the data of many Europeana providers, and thus, we argue, it enables better exploitation of that data. Note also that, as much as possible, EDM re-uses elements coming from already-established vocabularies, such as Dublin Core, OAI-ORE, SKOS and CIDOC-CRM, thus lowering the cost of its creation and, hopefully, its adoption.

For more information on EDM, we refer to the *EDM Definitions* and *EDM Primer* on Europeana&#39;s [technical documents](http://pro.europeana.eu/edm-documentation) page. The EDM OWL ontology is accessible through content negotiation but it is also [directly available](https://github.com/europeana/corelib/blob/master/corelib-edm-definitions/src/main/resources/eu/rdf/edm.owl). Please be aware that both data.europeana.eu and those documents are under constant revision. There could therefore be some (minor) discrepancies between them!

## Generating EDM data for Europeana

The data available in the pilot results from a conversion of legacy ESE data into EDM. This entails creating resources for the main EDM classes, and distributing ESE metadata fields over these various resources, as presented in this [mapping](http://old.europeanalabs.eu/wiki/EDMPrototypingTask15). The resulting data does not realise the full potential offered by EDM but it allows us to make some distinctions, which we believe are useful for data consumers.

Additionally, data.europeana.eu includes semantic connections to external (linked data) sources. We serve links to other linked data services already maintained by Europeana providers - currently only the Swedish cultural heritage aggregator (SOCH). The vast majority of external links come from semantic enrichment realised at the Europeana Office, connecting Europeana items to places (as provided by [GeoNames](http://geonames.org)), concepts (from the [GEMET](http://www.eionet.europa.eu/gemet) thesaurus), persons (from [DBpedia](http://dbpedia.org)) and time periods (from an adhoc time period vocabulary).

![LOD approach](/img/api/Linked-Open-Data/lod_approach.png)

## A walk through the resources served at data.europeana.eu
The core EDM classes, together with the properties we expect to be applied to their instances, are presented in these [templates](http://europeanalabs.eu/wiki/EDMObjectTemplatesEuropeana). Of course it is unrealistic that all of those properties would be available for any single object exposed in Europeana. This is especially true for items that are described using the simple legacy ESE format. In particular, Europeana does not currently harvest any description for contextual entities, such as concepts, agents and places. Still, the ESE data harvested from Europeana providers, as well as the enrichment work by Europeana, allows us to create and describe a network of EDM resources for every Europeana object, as shown in this [big picture example](http://www.few.vu.nl/~aisaac/edm/ese2edm_mapping.png). The following explains in more detail the data that can be found for every class of resource served by data.europeana.eu:

**Item (Provided Cultural Heritage Object)**: Item resources represent objects (painting, book, etc.) for which institutions provide digital representations to be accessed through Europeana. Provided Cultural Heritage Object (CHO) URIs (for example,  [http://data.europeana.eu/item/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03](http://data.europeana.eu/item/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03), ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Fitem%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)) are the main entry points in data.europeana.eu. A provided CHO is the hub of the network of relevant resources (cf. below). When applicable, the Europeana URIs for these objects also link, via &#39;owl:sameAs&#39; statements, to other linked data resources about the same object, for example&nbsp;[this item](http://data.europeana.eu/item/91622/1BF8BC466E65367929379C83FC639F27961ACD18) ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Fitem%2F91622%2F1BF8BC466E65367929379C83FC639F27961ACD18)). In this Linked Data pilot, no descriptive metadata (creator, subject, etc.) is directly attached to item URIs. It is instead attached to the *proxies* that represent a view of the object, from a specific institution&#39;s perspective (either a Europeana provider or Europeana itself). Depending on the feedback received during this pilot, we may change this and duplicate all the descriptive metadata at the level of the item URI. Such an option is costly in terms of data verbosity, but it would enable easier access to metadata for data consumers less concerned about provenance.

![Item](/img/api/Linked-Open-Data/City-Item.png)

**Provider&#39;s proxy**: These resources (for example, [http://data.europeana.eu/proxy/provider/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03] (http://data.europeana.eu/proxy/provider/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03); ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Fproxy%2Fprovider%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)) are used as subjects of descriptive statements (creator, subject, date of creation, etc.) for the item, which are contributed by a Europeana provider. In the [OAI-ORE](http://www.openarchives.org/ore/) model, proxies enable the separation of different views for the same resource, in the context of different aggregations. This allows us to distinguish the original metadata for the object from the metadata that is created by Europeana, an important requirement for us. Descriptive properties that apply to these proxies mostly come from [Dublin Core](http://dublincore.org/) : [view an example](http://data.europeana.eu/data/proxy/provider/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03). Proxies are connected to the item they represent a facet of using the &#39;ore:proxyFor&#39; property. They are attached to the aggregation that contextualises them using &#39;ore:proxyIn&#39;. *Note to the reader: given the lack of support for named graphs (aka &#39;quadruples&#39;) in the RDF standard, [ORE](http://www.openarchives.org/ore/) introduced proxies in order to support referencing resources in the context of a graph. Eventually, named graphs may be natively supported by RDF, which would lead to obsolescence of the proxy construct.*

![Providers Proxy](/img/api/Linked-Open-Data/City-ProvidersProxy.png)

**Provider&#39;s aggregation**: These resources (e.g., [http://data.europeana.eu/aggregation/provider/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03](http://data.europeana.eu/aggregation/provider/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03); ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Faggregation%2Fprovider%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)) provide data related to a Europeana provider&#39;s gathering of digitised representations and descriptive metadata for an item. As shown in [this data](http://data.europeana.eu/data/aggregation/provider/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03), they are related to digital resources about the item, be they files directly representing it (&#39;edm:object&#39; and &#39;edm:isShownBy&#39;) or webpages showing the object in context (&#39;edm:isShownAt&#39;). They may also provide controlled rights information applying to these resources (&#39;edm:rights&#39;). Other statements provided in the same ESE record as the descriptive metadata for the item &ndash; but that do not always clearly apply to it &ndash; are also attached to aggregations. Finally, provenance data is given in statements using &#39;edm:provider&#39; (the direct provider to Europeana in the data aggregation chain) or &#39;edm:dataProvider&#39; (the cultural institution that curates the object). The aggregation is connected to the item resource using the &#39;edm:aggregatedCHO&#39; property.

![Providers Aggregation](/img/api/Linked-Open-Data/City-ProvidersAggregation.png)

**Europeana&#39;s proxy**: The second type of proxies served at data.europeana.eu. are Europeana proxies (e.g., [http://data.europeana.eu/proxy/europeana/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03](http://data.europeana.eu/proxy/europeana/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03); ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Fproxy%2Feuropeana%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)) which provide access to the metadata created by Europeana for a given item, distinct from the metadata provided by the provider. Here one can find &#39;edm:year&#39; statements, indicating a normalised date associated with the object. We also serve millions of generic &#39;edm:hasMet&#39; enrichments, created by Europeana from a range of ESE descriptive fields ([read documentation](http://europeanalabs.eu/wiki/EDMPrototypingTask21#RelevantWorkdone:EuropeanaOffice)). These statements connect a Europeana proxy to places from [GeoNames](http://geonames.org/), concepts from the [GEMET](http://www.eionet.europa.eu/gemet) thesaurus, persons from [DBpedia](http://dbpedia.org) and periods from an adhoc time vocabulary. Finally, a proxy is connected to the item it represents a facet of, using the &#39;ore:proxyFor&#39; property, as well as to the aggregation</a> that contextualises it, using &#39;ore:proxyIn&#39;.

![Europeana Proxy](/img/api/Linked-Open-Data/City-EuropeanaProxy.png)

**Europeana&#39;s aggregation**: a Europeana aggregation (for example, [http://data.europeana.eu/aggregation/europeana/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03](http://data.europeana.eu/aggregation/europeana/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03), ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Faggregation%2Feuropeana%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)) bundles together the result of all data creation and aggregation efforts for a given item. It aggregates the provider&#39;s aggregation (using ore:aggregates), which in turn will connect to the provider&#39;s proxy. Next to the provider aggregation, one can find the digitised resources Europeana.eu serves for the item, i.e., an object page (&#39;edm:landingPage&#39;) and a thumbnail (using a combination of &#39;edm:hasView&#39; and &#39;foaf:thumbnail&#39;). The Europeana proxy is also connected to this aggregation, as mentioned above.

![Europeana Aggregation](/img/api/Linked-Open-Data/City-EuropeanaAggregation.png)

**Resource map**: OAI-ORE Resource maps are constructs for indicating meta-level statements about the creation and publication of ORE data (ORE aggregations and their aggregated resources). We are exploring their use as a contextualisation mechanism for the Europeana aggregation. Maps (for example, [http://data.europeana.eu/rm/europeana/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03](http://data.europeana.eu/rm/europeana/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03); ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Frm%2Feuropeana%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)) are connected to an item they are about using &#39;foaf:primaryTopic&#39;, and to its corresponding Europeana aggregation using &#39;ore:describes&#39;. They sum up the provenance of data using &#39;dc:creator&#39; and &#39;dc:contributor&#39; statements. Crucially, they also indicate, in a machine-readable way, that the (RDF) data served at data.europeana.eu is provided under the [CC0](http://creativecommons.org/publicdomain/zero/1.0/)&nbsp;Public Domain Dedication.

![Resource Map](/img/api/Linked-Open-Data/City-ResourceMap.png)

## Namespaces used in data.europeana.eu

The following RDF namespace abbreviations are currently used in data.europeana.eu:

* rdf:[http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)

* owl:[http://www.w3.org/2002/07/owl#](http://www.w3.org/2002/07/owl#)
 
* dc:[http://purl.org/dc/elements/1.1](http://purl.org/dc/elements/1.1)
	
* dcterms:[http://purl.org/dc/terms/](http://purl.org/dc/terms/)

* ore:[http://www.openarchives.org/ore/terms/](http://www.openarchives.org/ore/terms/)
	
* foaf:[http://xmlns.com/foaf/0.1/](http://xmlns.com/foaf/0.1/)

* edm:[http://www.europeana.eu/schemas/edm/](http://www.europeana.eu/schemas/edm/)





