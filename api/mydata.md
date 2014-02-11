---
layout: "api-page"
title: Accessing your MyEuropeana via API
published: true
---

* TOC
{:toc}

## Introduction

MyData is used to access your own MyEuroepana data through the API. 

## Authentication

MyData methods use your public and private api keys to authenticate.
POST a http login to 

  http://europeana.eu/api/v2/login.do

with the parameters:

| Field | Description |
|:------|:------------|
| j_username | Your PUBLIC apikey |
| j_password | Your PRIVATE apikey |

For a succesfull login, you should get a status 200 back, otherwise 
it will trigger a redirect to a login html page.

## Profile

Retrieve your MyEuropeana profile, including statistics.

  http://europeana.eu/api/v2/mydata/profile.json

### Request

The request doesn't take any parameters.

### Response

| Field | Datatype | Description |
|:------|:---------|:------------|
| ? | ? | ? |


## Saved Items

...

  http://europeana.eu/api/v2/mydata/saveditem.json

Request parameter action is general for all actions, but can be replaced by 
REST http request types.

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | empty / "LIST" / "CREATE" / "DELETE" |

### Get saved items

#### Request for LIST
HTTP request type: get

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| europeanaid | String | (optional) check the existance of a specific saved item |


#### Response for LIST

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| ? | ? | ? |

### Create saved items

#### Request for CREATE
HTTP request type: get / post or put

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| europeanaid | String | (optional) check the existance of a specific saved item |

### Delete saved items

#### Request for DELETE
HTTP request type: get / delete

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| itemid | String | itemid (returned by LIST action) |
| europeanaid | String | The Europeana ID of the record to delete |

## Tags

Modifying object tags

  http://europeana.eu/api/v2/mydata/tag.json

Request parameter action is general for all actions, but can be replaced by 
REST http request types.

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | empty / "LIST" / "TAGCLOUD" / "CREATE" / "DELETE" |

### Get tags

#### Request for LIST
REST HTTP request type: get

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| europeanaid | String | (optional) check the existance of a specific saved item |


#### Response for LIST

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| ? | ? | ? |

#### Request for TAG CLOUD
REST HTTP request type: get (action parameter is required)

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | "TAGCLOUD" |

* the tagcloud action does not take any aditional parameters

#### Response for TAG CLOUD

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| ? | ? | ? |

### Create saved items

#### Request for CREATE
REST HTTP request type: get / post or put

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| europeanaid | String | (optional) check the existance of a specific saved item |
| tag | String | The tag to add for this object |

### Delete saved items

#### Request for DELETE
REST HTTP request type: get / delete

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| tagid | String | delete by tagid (returned by LIST action) |
| tag | String | delete by tag (can delete multiple tags) |
| europeanaid | String | Remove all tags binded to a Europeana Record (can delete multiple tags) |

* tag and europeanaid parameters can be used combined, tagid works only as single selection parameter.

## Saved Searches

...

  http://europeana.eu/api/v2/mydata/savedsearch.json

### Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| ? | ? | ? |


### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| ? | ? | ? |
