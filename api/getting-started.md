---
layout: "api-page"
title: Getting Started with the Search API
published: true
---

In this section you will find all information necessary to jump-start using Europeana API.

## Request

Every Europeana Search API call is an HTTP request in a specified format that is sent to the Europeana API service.
The API root URL is located at: 

    http://www.europeana.eu/api/v2


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
| Array([Datatype]) |	an ordered sequence values of Datatype (e.g. String or Object), comma-separated and enclosed in square brackets |
| Object |	an unordered collection of key:value pairs with the ':' character separating the key and the value, comma-separated and enclosed in curly braces; the keys must be strings and should be distinct from each other|
| LangMap |	TBD |

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


## Callback Function

TBD
