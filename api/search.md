---
layout: "api-page"
title: Search
published: true
---

* TOC
{:toc}

Search for records.

    http://europeana.eu/api/v2/search.json

## Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| query | String | The search term(s). See [Query Syntax](http://labs.europeana.eu/api/query) for information on forming complex queries and examples. |
| profile | String | Profile parameter controls the format and richness of the response: <ul><li>minimal - minimal set of metadata</li><li>standard - TBD</li><li>facets - information about [facets](http://labs.europeana.eu/api/repository/#facets) is added. For the records the Standard profile is used.</li><li>breadcrumbs - information about the query is added in the form of [breadcrumbs](http://labs.europeana.eu/api/search/#breadcrumb). Facets are added as well; for the records the Standard profile is used.</li><li>portal - Standard, Facets, and Breadcrumb combined </li></ul> |
| qf | String | Facet filtering query. This parameter can be defined more than once. See [Query Syntax](http://labs.europeana.eu/api/query) page for more information. |
| rows | Number | The number of records to return. Maximum is 100. Defaults to 12. |
| start | Number | The item in the search results to start with. The first item is 1. Defaults to 1. |
| callback| String| Name of a client side [callback function](#callback_function).|

## Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| items |   Array ([Item](#item)) |  This is a collection of search results. Each item is represented by a summary of the metadata record. The actual content is dependent of the profile parameter.|
| facets |  Array ([Facet](#facet)) |    A collection of facets that describe the resultant dataset. |
| breadcrumbs | Array ([Breadcrumb](#breadcrumb))| A collection of search queries that were applied in this call. |
| itemsCount |  Number  | The number of retrieved records |
| totalResults |    Number |    The total number of results |


### item

Each item is a search result and is represented by a summary of its metadata record. The actual content depends of the profile parameter.

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| completeness |    Number  | A number from 1 to 10 that is an internal measure of the metadata quality. It is based on the availability of mandatory and optional schema fields.|
| dataProvider<sup>\*</sup> |  Array (String)  | The names of Europeana Data Providers who provided the object. |
| europeanaCollectionName<sup>\*</sup> |  Array (String) |    The names of the Europeana collections that contain the item |
| id<sup>\*</sup>         | String |   The Europeana ID of the record. |
| guid<sup>\*</sup>       |    String |    A link to the object page on the Europeana portal to be used by client applications.|
| link<sup>\*</sup>       | String |   A link to the API object call. This link should be used to retrieve the full metadata object.|
| provider<sup>\*</sup>   |    String |    The name or identifier of the provider of the object.|
| rights<sup>\*</sup>     | Array (String) |   A collection of URLs referring to the object rights.|
|type<sup>\*</sup>        |    String  | The type of the provided object (TEXT, VIDEO, SOUND, IMAGE, 3D)|
| dcCreator    |    Array (String) |    A collection entities primarily responsible for making the resource.|
| edmConceptLabel | String |    The label of the SKOS Concept of the record. Find more in [EDM Definition](http://pro.europeana.eu/documents/900548/bb6b51df-ad11-4a78-8d8a-44cc41810f22) |
|edmPreview    |String  |A link to the representation of the object on Europeana.|
|edmTimespanLabel | String |    The label of EDM Time Span object of the record. Find more in [EDM Definition](http://pro.europeana.eu/documents/900548/bb6b51df-ad11-4a78-8d8a-44cc41810f22) |
|language      |    Array (String) |    Languages assigned to the resource with reference to the Provider.  Usually, this field contains the languages of the metadata of the record.|
|title         |    Array (String)| The main and alternative titles of the item.|
|year          |    Array (String)| A point of time associated with an event in the life of the original analog or born digital object. Find more in [EDM Definition](http://pro.europeana.eu/documents/900548/bb6b51df-ad11-4a78-8d8a-44cc41810f22)|


### breadcrumb

A collection of search queries that were applied in this call.

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
|display    | String    | Human-readable description of the search |
|param      | String    | The search parameter name (**query** or **qf**)|
|value      | String    | The search parameter value |
|href       |  String   | The search part of the URL which can be reused in further calls|
|last       | Boolean   | Boolean value indicating whether the current breadcrumb is the last one |

### facet

A collection of facets that describe the resultant dataset.

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| name | String  | The name of the facet (COUNTRY, DATA_PROVIDER, LANGUAGE, PROVIDER, RIGHTS, TYPE, UGC, YEAR) |
| fields<sup>\*</sup> |   Array (field) | A collection of facet fields. Each field is an object that has a label (String) and a count of objects (Number).|

<sup>\*</sup> _indicates an obligatory property_

## Callback Function
Name of a client side (JavaScript) callback function. If you set a funtion the JSON response will be wrapped by this function call, so it is not JSON, but JSONP (JSON with Paggings). JSONP provides a method to request data from a server in a different domain, something prohibited by typical web browsers because of the same origin policy.
"Under the same origin policy, a web page served from server1.example.com cannot normally connect to or communicate with a server other than server1.example.com. An exception is the HTML script element. Exploiting the open policy for script elements, some pages use them to retrieve JavaScript code that operates on dynamically generated JSON-formatted data from other origins. This usage pattern is known as JSONP. Requests for JSONP retrieve not JSON, but arbitrary JavaScript code. They are evaluated by the JavaScript interpreter, not parsed by a JSON parser." (Wikipedia: JSONP)

A callback can be added to any JSON-based call by appending &callback=callbackname to the call, where the callbackname should be an existing JavaScript function existing on the client side. The API returns JSONP (JSON with Paggings) response, like this one:

/api/v2/record/9200143/41CCA52E2986E491BBA631D4899768A5002C455A.json?wskey=xxxx&profile=similar&callback=processEuropeanaSearch

returns
<pre>
processEuropeanaSearch({"apikey":"xxxxx","action":"record.json","success":true,"statsDuration":22,"requestNumber":8,"object":{"type":"TEXT","title":["Bibliotheca Indica"],"about": "/9200143/41CCA52E2986E491BBA631D4899768A5002C455A",....}})
</pre>

The JSON response is wrapped into your function, and the function use JSON as input parameter, and it immediatelly runs when it returns. In your client you have to define the callback function before you call the API. A client side example:
<pre>
<script>
function processEuropeanaSearch(json){
   alert(json.object.title.join(', '));
}
</script>
<script src="http://www.europeana.eu/api/v2/record/9200143/41CCA52E2986E491BBA631D4899768A5002C455A.json?wskey=xxxx&profile=similar&callback=processEuropeanaSearch"></script>
</pre>

Of course in this example we didn't do any rocket science with the returned Europeana record, it is your turn to do some fascinating thing.
