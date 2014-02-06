---
layout: "api-page"
title: Getting Started with the Europeana Search API
published: true
---


In this section you will find information necessary to jump-start using Europeana API.

## Request

Every Europeana Search API call is an HTTP request in a specified format that is sent to the Europeana API service.
The API root URL is located at: 
    http://www.europeana.eu/api/v2.

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
