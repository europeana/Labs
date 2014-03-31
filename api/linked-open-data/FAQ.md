---
layout: api-page
title: Frequently Asked Questions
---
This page addresses the most important points of the Linked Open Data pilot.


###Why is Linked Open Data important for Europeana and its community?

Linked Data offers many opportunities to the cultural sector, as suggested in the recent [reports](href="http://www.w3.org/News/2011.html#entry-9239)from the W3C Library Linked Data incubator group and our own [animation](http://vimeo.com/36752317).

Releasing Europeana metadata as Linked Open Data is an important step for Europeana, its partners and third parties. Linked Open Data has a key role in the [Europeana Strategic Plan 2011-2015](http://pro.europeana.eu/c/document_library/get_file?uuid=c4f19464-7504-44db-ac1e-3ddb78c922d7&amp;groupId=10602)&nbsp; and supports the idea that Europeana 'distributes' content and 'engages' its users:

*Distribute*: the pilot will allow Europeana to distribute the cultural heritage content, in order to <em>‘Make their heritage available to users wherever they are, whenever they want it'.

*Engage*: it will also enhance the engagement of the different communities represented by Europeana's content by allowing re-use and connectivity.

How can data.europeana.eu contribute to these goals ?

First, Linked Data is a data-publishing technique that enables related data to be connected and makes it easily accessible using common Web technologies. See this [White Paper](http://pro.europeana.eu/c/document_library/get_file?uuid=cb417911-1ee0-473b-8840-bd7c6e9c93ae&groupId=10602)for further discussion on the scientific interest of Linked Data for the Europeana community.

Second, Linked Open Data realises this in an <i>open</i> manner, where everyone can access, re-use, enrich and share the data published. See this [business document](http://pro.europeana.eu/c/document_library/get_file?uuid=374c381f-a48b-4cf0-bbde-172cf03672a2&groupId=10602) for further explanation on why Europeana and its partners should open the metadata they gather from all around Europe, and the [Support for open data](http://pro.europeana.eu/support-for-open-data) section of our site for general information on Europeana's efforts. You may also be interested in this [paper](http://www.museumsandtheweb.com/mw2012/papers/sharing_cultural_heritage_the_linked_open_data)at Museum &amp; the Web that gives interesting context and pointers to current Linked Open Data developments.

###What does our Linked Open Data look like?
The data served by data.europeana.eu is generated from the metadata Europeana has harvested using the Europeana Semantic Elements (ESE)(http://pro.europeana.eu/technical-requirements)</a>. To make this data amenable to Linked Data publishing, we have converted it to the [Resource Description Framework (RDF)](http://en.wikipedia.org/wiki/Resource_Description_Framework) format, and structured it using the [Europeana Data Model](http://pro.europeana.eu/edm-documentation). We give more detail on the EDM data we publish on the [technical details page](http://pro.europeana.eu/technical-requirements).

In addition to the original data harvested by Europeana from its data providers, the data served at data.europeana.eu includes:

* links to other Linked Open Data services which hold information about objects that are also served by data.europeana.eu: for the moment this only concerns the Swedish cultural heritage aggregator (SOCH)
	
* semantic enrichment done at the Europeana Office, connecting Europeana objects to structured representations of places (using [GeoNames](http://geonames.org), concepts (using the [GEMET](http://www.eionet.europa.eu/gemet)thesaurus), people (using [DBpedia](http://dbpedia.org)) and time periods(from an adhoc time period vocabulary).
</ul>

###How can you access, use and contribute to Europeana's Linked Open Data?
As this project is about engaging users from different communities, we&#39;ve made sure that data from the pilot can be accessed, re-used, enriched and shared by everyone.

data.europeana.eu is serving metadata following the terms of the <a href="http://creativecommons.org/publicdomain/zero/1.0/">Creative Commons CC0 public domain dedication.

File dumps of the RDF data are available on the <a href="http://pro.europeana.eu/web/datasets"> datasets </a> page. You can also fetch a subset of this data over the HTTP protocol, using established <a href="http://www.w3.org/TR/cooluris/" title="Click here to view the W3C entry on linked data recipes">Linked Data recipes</a>, most notably the use of HTTP URIs as identifiers and entry points into data. Here are some examples of these data.europeana.eu resources:

* [http://data.europeana.eu/item/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03](http://data.europeana.eu/item/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03) refers to a real-world object for which digital resources are available through Europeana ([access data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Fitem%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)).

* [http://data.europeana.eu/aggregation/provider/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03](http://data.europeana.eu/aggregation/provider/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)links to the digital resources submitted on that object by its provider, and gives meta-information on the digital resource aggregation process, e.g., the name of the data provider ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Faggregation%2Fprovider%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)).

* [http://data.europeana.eu/proxy/provider/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03](http://data.europeana.eu/proxy/provider/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03) gives all the data that applies to the real-world object, from the perspective of the Europeana provider ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Fproxy%2Fprovider%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)).

* [http://data.europeana.eu/proxy/europeana/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03](http://data.europeana.eu/proxy/europeana/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03) gives all the data that applies to the real-world object, from the perspective of Europeana. This is the resource to which Europeana semantic enrichments are attached ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Fproxy%2Feuropeana%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)).

* [http://data.europeana.eu/aggregation/europeana/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03](http://data.europeana.eu/aggregation/europeana/92037/25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)links to the digital resources maintained by Europeana for the object, and gives meta-information on the data aggregation process, which is created by Europeana ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Faggregation%2Feuropeana%2F92037%2F25F9104787668C4B5148BE8E5AB8DBEF5BE5FE03)).

* [http://data.europeana.eu/item/91622/1BF8BC466E65367929379C83FC639F27961ACD18](http://data.europeana.eu/item/91622/1BF8BC466E65367929379C83FC639F27961ACD18)is an object for which the Swedish Open Cultural Heritage also provides its own Linked Open Data representation ([raw data](http://www.w3.org/RDF/Validator/ARPServlet?URI=http%3A%2F%2Fdata.europeana.eu%2Fdata%2Fitem%2F91622%2F1BF8BC466E65367929379C83FC639F27961ACD18)).

We also provide the datasets as file dumps of the RDF data at data downloads page.


