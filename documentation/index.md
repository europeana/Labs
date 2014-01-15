---
layout: api
---

* TOC
{:toc}

### Request

Every API call is an HTTP request in a specified format that is sent to the Europeana API service.

The API root URL is located at: [http://www.europeana.eu/api/v2](http://www.europeana.eu/api/v2).

<a name="Authentication">**Authentication Parameter**</a>

Every API call must be provided a special authentication parameter _wskey_. This parameter should contain your private key that you got during the registration process.

### Response

Every response to an API call will contain a number of standard fields that precede the fields specific for the call. The standard part contains the following fields:

| Field | Datatype[^datatype] | Description |
|-------|----------|-------------|
| apikey | String | the authentication parameter sent out by the client (the _wskey_ parameter) |
| action | String | the name of the API method that was called |
| success | Boolean | a boolean (true/false) flag denoting the successful execution of the call |
| statsDuration | Number | the time (in milliseconds) taken to serve the request |
| requestNumber | Number | a positive number denoting the number of request by this API key within the last 24 hours |
| error | String | if the call was not successful this fields will contain a detailed text message. See [Error Codes](/portal/api-working-with-api.html#Error-Codes) for more information. |
| params | Object | parameters the client entered when requested the JSON API call. If the client submits an invalid values, API returns the default value (see individual calls for the default values of given parameters). Shown up only if the profile parameter contains "params". |

### Error Codes

An error during processing of an API method is reported by (1) a relevant HTTP status code, (2) a value of the success field and  (3) a meaningful error message in the error field (see the [Response](/portal/api-working-with-api.html#Response "Response") section).

The following HTTP status codes are returned:

<table  class="bordered">
	<thead>
		<tr>
			<th>HTTP Status Code</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>200</td>
			<td>The request was executed successfully.</td>
		</tr>
		<tr>
			<td>401</td>
			<td>Authentication credentials were missing or authentication failed.</td>
		</tr>
		<tr>
			<td>404</td>
			<td>The requested record was not found.</td>
		</tr>
		<tr>
			<td>429</td>
			<td>The request could be served because the application has reached its usage limit.</td>
		</tr>
		<tr>
			<td>500</td>
			<td>Internal Server Error. Something has gone wrong, please report to us.</td>
		</tr>
	</tbody>
</table>

### Usage Limit

Applications are permitted to perform up to 10000 calls in 24 hours. If you need more than that please [contact us](mailto:api@europeana.eu).

[^datatype]: [Datatype defitions](api-introduction.html#data-types "API1-API2 Mapping")

### Example

The call `http://europeana.eu/api/v2/search.json?wskey=xxxxxxxx&query=mona+lisa&profile=standard%20params` returns

```json
{
  "apikey": "xxxxxxxxx",
  "action": "search.json",
  "success": true,
  "requestNumber": 6,
  "params": {
    "query": "mona lisa",
    "profile": "standard params",
    "start": 1,
    "rows": 12
  },
  "itemsCount": 12,
  "totalResults": 195,
  "items": [...]
}
```

#### Javascript

And some javascript, just to check the syntax formatting.

{% highlight java %}
var sum = function() {
    var i, x = 0;
    for (i = 0; i < arguments.length; ++i) {
        x += arguments[i];
    }
    return x;
}
sum(1, 2, 4); // returns 6
{% endhighlight %}
