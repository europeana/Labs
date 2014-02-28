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

### Authentication Parameter
Every API call must be provided a special authentication parameter wskey. This parameter should contain your private key that you got during the registration process.

## Response

A response to an API call will always contain a number of standard fields that precede the fields specific for the call. The standard part contains the following fields:

| Field        | Datatype       | Description  |
| ------------- |:-------------:| :-----|
| apikey |	String	| the authentication parameter sent out by the client (the wskey parameter) |
| action |	String |	the name of the API method that was called |
| success |	Boolean |	a boolean (true/false) flag denoting the successful execution of the call |
| statsDuration |	Number |	the time (in milliseconds) taken to serve the request |
| requestNumber |	Number |	a positive number denoting the number of request by this API key within the last 24 hours |
| error | 	String |	if the call was not successful this fields will contain a detailed text message. See [Error Codes](labs.europeana.eu/documentation/error-codes.html) for more information.|
| params |	Object	| original request parameters. If an invalid request parameter was submitted, this response parameter will contain the default value (see individual calls for the default values). Shown up only if the profile parameter contains "params". |

## Datatypes

Europeana API uses the following datatypes:

| Datatype        | Description       | 
| ------------- |-------------| 
| Number |	integer or double precision floating-point number |
| String |	double-quoted Unicode, with backslash escaping |
| Boolean |	true or false |
| Array |	an ordered sequence of values, comma-separated and enclosed in square brackets; the values do not need to be of the same type | 
| Array | ([Datatype])	an ordered sequence of another data type (such as String or an object), comma-separated and enclosed in square brackets; the values do not need to be of the same type |
| Object |	an unordered collection of key:value pairs with the ':' character separating the key and the value, comma-separated and enclosed in curly braces; the keys must be strings and should be distinct from each other|
| LangMap |	A special data type we use in the API Object Call, to provide values in various languages. It is an associative array where the keys are ISO language codes or "def" (where the language is not given), and the value is an array of strings. For example: "dcTitle": {"por": ["Paris"]}. Here the data type of dcTitle is a LanguageMap: the language code is "por" (stands for Portuguese), and the value is a list with only one element: "Paris". |


## Client-side Callback Function

Name of a client side (JavaScript) callback function. If you set a funtion the JSON response will be wrapped by this function call, so it is not JSON, but JSONP (JSON with Paddings). JSONP provides a method to request data from a server in a different domain, something prohibited by typical web browsers because of the same origin policy.

"Under the same origin policy, a web page served from server1.example.com cannot normally connect to or communicate with a server other than server1.example.com. An exception is the HTML <script> element. Exploiting the open policy for <script> elements, some pages use them to retrieve JavaScript code that operates on dynamically generated JSON-formatted data from other origins. This usage pattern is known as JSONP. Requests for JSONP retrieve not JSON, but arbitrary JavaScript code. They are evaluated by the JavaScript interpreter, not parsed by a JSON parser." (Wikipedia: JSONP)

A callback can be added to any JSON-based call by appending &callback=callbackname to the call, where the callbackname should be an existing JavaScript function existing on the client side. The API returns JSONP (JSON with Paggings) response, like this one:

/api/v2/record/9200143/41CCA52E2986E491BBA631D4899768A5002C455A.json?wskey=xxxx&profile=similar&callback=processEuropeanaSearch
returns

processEuropeanaSearch({"apikey":"xxxxx","action":"record.json","success":true,"statsDuration":22,"requestNumber":8,"object":{"type":"TEXT","title":["Bibliotheca Indica"],"about": "/9200143/41CCA52E2986E491BBA631D4899768A5002C455A",....}})
The JSON response is wrapped into your function, and the function use JSON as input parameter, and it immediatelly runs when it returns. In your client you have to define the callback function before you call the API. A client side example:

<script>
function processEuropeanaSearch(json){
   alert(json.object.title.join(', '));
}
</script>
<script src="http://www.europeana.eu/api/v2/record/9200143/41CCA52E2986E491BBA631D4899768A5002C455A.json?wskey=xxxx&profile=similar&callback=processEuropeanaSearch"></script>
Of course in this example we didn't do any rocket science with the returned Europeana record, it is your turn to do some fascinating thing.
