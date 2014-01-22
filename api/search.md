---
layout: api-page
title: API Search Method
published: true
---

* TOC
{:toc}

# search.json

Find objects within the Europeana repository.

    http://europeana.eu/api/v2/search.json

## Request

**Test**
| Field | Datatype[^datatype] | Description |
|-------|----------|-------------|
| apikey | String | the authentication parameter sent out by the client (the _wskey_ parameter) |
**Test**

| Parameter | Datatype | Desription |
|: ------------- |:-------------| :-----|
| query | String | The search term(s) for the search. See the [Query Syntax](http://www.europeana.eu/portal/api-query-syntax.html) section of this documentation for information on forming complex queries and examples. |
| callback|	String|	Name of a client side callback function.|
| profile | String | A number of profiles can be added to a search to control the format and richness of the response TBD (add profiles) |
| qf	| String	| Facet filtering query. This parameter can be defined more than once. See the query syntax documentation on [faceted search](http://www.europeana.eu/portal/api-query-syntax.html#faceted) for more information. |
| rows	 | Number	| The number of records to return; the maximum value is 100 (default is 12). |
| start |	Number	| The item in the search results to start with; first item is 1 (default is 1). |


## Response


| Field | Datatype | Desription |
|: ------------- |:-------------| :-----|
| items |	Array ([Item](http://www.europeana.eu/portal/api-search-json.html#Item)) |	This is a collection of search results. Each item is represented by a summary of the metadata record. The actual content is dependent of the profile parameter.|
| facets |	Array ([Facet](http://www.europeana.eu/portal/api-search-json.html#Facet)) |	A collection of facets that describe the resultant dataset. |
| breadCrumbs |	Array ([Breadcrumb](http://www.europeana.eu/portal/api-search-json.html#Item))|	A collection of search queries that were applied in this call. |
| itemsCount |	Number	| The number of retrieved records |
| totalResults | 	Number |	The total number of results |


### item

Each item is a search result and is represented by a summary of its metadata record. The actual content depends of the profile parameter.

| Field | Datatype | Desription |
|: ------------- |:-------------| :-----|
| completeness |	Number	| A number from 1 to 10 that is an internal measure of the metadata quality. It is based on the availability of mandatory and optional schema fields.|
| dataProvider\* |	Array (String)	| The names of Europeana Data Providers who provided the object. |
| europeanaCollectionName \* |	Array (String) |	The names of the Europeana collections that contain the item |
| id\*	       | String |	The Europeana ID of the record. |
| guid\*       |	String |	A link to the object page on the Europeana portal to be used by client applications.|
| link\*	   | String |	A link to the API object call. This link should be used to retrieve the full metadata object.|
| provider\*   |	String |	The name or identifier of the provider of the object.|
| rights\*	   | Array (String) |	A collection of URLs referring to the object rights.|
|type\*        |	String	| The type of the provided object (TEXT, VIDEO, SOUND, IMAGE, 3D)|
| dcCreator    |	Array (String) |	A collection entities primarily responsible for making the resource.|
| edmConceptLabel |	String |	The label of the SKOS Concept of the record. Find more in the EDM Definition |
|edmPreview	   |String	|A link to the representation of the object on Europeana.|
|edmTimespanLabel |	String |	The label of EDM Time Span object of the record. Find more in the EDM Definition |
|language      |	Array (String) |	Languages assigned to the resource with reference to the Provider.  Usually, this field contains the languages of the metadata of the record.|
|title         |	Array (String)|	The main and alternative titles of the item.|
|year          |	Array (String)|	A point of time associated with an event in the life of the original analog or born digital object. Find more in the EDM Definition|


### breadcrumb

A collection of search queries that were applied in this call.

| Field | Datatype | Desription |
|: ------------- |:-------------| :-----|
|display	| String    |	Human-readable description of the search |
|param	    | String	| The search parameter name (query or qf)|
|value	    | String	| The search parameter value |
|href	    |  String	| The search part of the URL which can be reused in further calls|
|last	    | Boolean	| Boolean value indicating whether the current breadcrumb is the last one |


### facet

A collection of facets that describe the resultant dataset.

| Field | Datatype | Desription |
|: ------------- |:-------------| :-----|
| name \* |	String	| The name of the facet (COUNTRY, DATA_PROVIDER, LANGUAGE, PROVIDER, RIGHTS, TYPE, UGC, YEAR) |
| fields \* |	Array (field) |	A collection of facet fields. Each field is an object that has a label (String) and a count of objects (Number).|

\* _indicates an obligatory property_
