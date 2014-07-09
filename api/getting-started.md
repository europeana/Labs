---
layout: "api-page"
title: Getting Started with Europeana REST API
published: true
excerpt: Everything you need to know to start using Europeana API right away.
---

In this section you will find all information necessary to jump-start using Europeana API.

## Request

Every Europeana Search API call is an HTTP request in a specified format that is sent to the Europeana API service.
The API root URL is located at: 

    http://www.europeana.eu/api/v2

For obligatory request parameters look into the documentation of specific calls. The [authentication](http://labs.europeana.eu/api/authentication/) section provides information on the obligatory authentication parameter _wskey_.


## Response

A response to an API call will always contain a number of standard fields that precede the fields specific for the call. The standard part contains the following fields:

| Field        | Datatype       | Description  |
| ------------- |:-------------| :-----|
| apikey |	String	| the authentication parameter sent out by the client (the wskey parameter) |
| action |	String |	the name of the API method that was called |
| success |	Boolean |	a boolean (true/false) flag denoting the successful execution of the call |
| statsDuration |	Number |	the time (in milliseconds) taken to serve the request |
| requestNumber |	Number |	a positive number denoting the number of request by this API key within the last 24 hours |
| error | 	String |	if the call was not successful this fields will contain a detailed text message. See [Error Codes](labs.europeana.eu/documentation/error-codes.html) for more information.|
| params |	Object	| original request parameters. If an invalid request parameter was submitted, this response parameter will contain the default value (see individual calls for the default values). Shown up only if the profile parameter contains "params". |

## Datatypes

Europeana API uses the following datatypes:

| Datatype|Description|
| ------------- |:-------------|
| Number |	integer or double precision floating-point number |
| String |	double-quoted Unicode, with backslash escaping |
| Boolean |	true or false |
| Array |	an ordered sequence of values, comma-separated and enclosed in square brackets; the values do not need to be of the same type |
| Array(\[Datatype\]) |	an ordered sequence values of Datatype (e.g. String or Object), comma-separated and enclosed in square brackets |
| Object |	an unordered collection of key:value pairs with the ':' character separating the key and the value, comma-separated and enclosed in curly braces; the keys must be strings and should be distinct from each other|
| LangMap |	A special data type we use in the API Object Call, to provide values in various languages. It is an associative array where the keys are ISO language codes or "def" (where the language is not given), and the value is an array of strings. For example: `"dcTitle": {"por": ["Paris"]}`. Here the data type of dcTitle is a LanguageMap: the language code is "por" (stands for Portuguese), and the value is a list with only one element: "Paris". For those familiar with Java notations: is it the JSON equivalent of `Map<String,List<String>>` |
| null | empty value |

## Error Codes

An error during processing of an API method is reported by (1) a relevant HTTP status code, (2) a value of the success field and (3) a meaningful error message in the error field (see the Response section).

The following HTTP status codes are returned:

| HTTP Status Code | Description  |
|:----------------|:-------------|
| 200 | The request was executed successfully. |
| 401 | Authentication credentials were missing or authentication failed. |
| 404 | The requested record was not found. |
| 429 | The request could be served because the application has reached its usage limit. |
| 500 | Internal Server Error. Something has gone wrong, tell us!|

## Namespaces

In the documentation we sometime refer to namespace prefixes, such as dc, skos, edm. Here we list all the namespace prefixes and URIs.

| prefix | Namespace URI | More info |
|:-------|:--------------|:----------|
| dc | http://purl.org/dc/elements/1.1/ | Dublin Core |
| dcterms | http://purl.org/dc/terms/ | Dublin Core Mmetadata Initiative (DCMI) Metadata Terms http://dublincore.org/documents/2012/06/14/dcmi-terms/ |
| edm | http://www.europeana.eu/schemas/edm/ | Europeana Data Model |
| foaf | http://xmlns.com/foaf/0.1/ | FOAF (Friend of a Friend) Vocabulary http://xmlns.com/foaf/spec/ |
| ore | http://www.openarchives.org/ore/terms/ | Open Archives Initiative Object Reuse and Exchange http://www.openarchives.org/ore/1.0/ |
| owl | http://www.w3.org/2002/07/owl# | OWL Web Ontology Language |
| rdaGr2 | http://rdvocab.info/ElementsGr2/ | RDA Group 2 elements. http://metadataregistry.org/schema/show/id/15.html |
| rdf | http://www.w3.org/1999/02/22-rdf-syntax-ns# | Resource Description Framework |
| skos | http://www.w3.org/2004/02/skos/core# | Simple Knowledge Organization System http://www.w3.org/2009/08/skos-reference/skos.html |
| wgs84 | http://www.w3.org/2003/01/geo/wgs84_pos# | WGS84 Geo Positioning http://www.w3.org/2003/01/geo/ |


## Callback Function

Name of a client side (JavaScript) callback function. If you set a funtion the JSON response will be wrapped by this function call, so it is not JSON, but [JSONP](http://en.wikipedia.org/wiki/JSONP) (JSON with Paggings). JSONP provides a method to request data from a server in a different domain, something prohibited by typical web browsers because of the [same origin policy](http://en.wikipedia.org/wiki/Same_origin_policy).

> "Under the same origin policy, a web page served from server1.example.com cannot normally connect to or communicate with a server other than server1.example.com. An exception is the HTML script element. Exploiting the open policy for script elements, some pages use them to retrieve JavaScript code that operates on dynamically generated JSON-formatted data from other origins. This usage pattern is known as JSONP. Requests for JSONP retrieve not JSON, but arbitrary JavaScript code. They are evaluated by the JavaScript interpreter, not parsed by a JSON parser." (Wikipedia: [JSONP](http://en.wikipedia.org/wiki/JSONP))

A callback can be added to any JSON-based call by appending &callback=callbackname to the call, where the callbackname should be an existing JavaScript function existing on the client side. The API returns JSONP response, like this one:

    /api/v2/record/[record ID].json?wskey=xxxx&profile=similar&**callback=processEuropeanaSearch**

returns

```JavaScript
processEuropeanaSearch({
  "apikey":"xxxxx",
  "action":"record.json",
  "success":true,
  "statsDuration":22,
  "requestNumber":8,
  "object":{
    "type":"TEXT",
    "title":["Bibliotheca Indica"],
    "about":"[record ID]",
    ....
  }
})
```

The JSON response is wrapped into your function, and the function use JSON as input parameter, and it immediatelly runs when it returns. In your client you have to define the callback function before you call the API. A client side example:

```HTML
<script>
function processEuropeanaSearch(json){
  alert(json.object.title.join(', '));
}
</script>
<script src="http://europeana.eu/api/v2/record/0000/1111.json?wskey=xxxx&callback=processEuropeanaSearch"></script>
```

Of course in this example we didn't do any rocket science with the returned Europeana record, it is your turn to do some fascinating thing.

