---
layout: "api-page"
title: API Error Codes
published: true
---

* TOC
{:toc}

An error during processing of an API method is reported by (1) a relevant HTTP status code, (2) a value of the success field and (3) a meaningful error message in the error field (see the Response section).

The following HTTP status codes are returned:

| HTTP Status Code | Description  |
|:----------------|:-------------|
| 200 | The request was executed successfully. |
| 401 | Authentication credentials were missing or authentication failed. |
| 404 | The requested record was not found. |
| 429 | The request could be served because the application has reached its usage limit. |
| 500 | Internal Server Error. Something has gone wrong, tell us!|

### Usage Limit

Applications are permitted to perform up to 10000 calls in 24 hours. If you need more than that please contact us at <api@europeana.eu>
