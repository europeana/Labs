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

MyData methods use your public and private api keys to authenticate. Logging 
in is done by send a POST request to the following url and use the described 
parameters filled with the combination of both API keys.

  http://europeana.eu/api/v2/login.do

| Field | Description |
|:------|:------------|
| j_username | Your PUBLIC apikey |
| j_password | Your PRIVATE apikey |

For a succesfull login, you should get a status 200 back, otherwise it will 
trigger a redirect to a login html page. This can be ignored, the login page is
for testing purposes only.

## REST support

MyData methods (except from profile.json) support REST support. If you use
REST requests, don't include the action parameter.

## General response for all CREATE & DELETE actions

The API will return the general API response, where the following fields are important.

| Field | Datatype | Description |
|:------|:---------|:------------|
| success | Boolean | true for success |
| error | String | Containing error message on unsuccesfull actions |


## Profile

Retrieve your MyEuropeana profile, including statistics. Profile information is read-only.

  http://europeana.eu/api/v2/mydata/profile.json

#### Request

The request doesn't take any parameters.

#### Response

Fields containing no data are not included in json response.

| Field | Datatype | Description |
|:------|:---------|:------------|
| email | String |  |
| userName | String |  |
| registrationDate | Timestamp | In timestamp format (Date.toLong) |
| lastLogin | Timestamp | In timestamp format (Date.toLong) |
| firstName | String |  |
| lastName | String |  |
| company | String |  |
| country | String |  |
| phone | String |  |
| address | String |  |
| website | String |  |
| fieldOfWork | String |  |
| nrOfSavedItems | Number | Number of saved items |
| nrOfSavedSearches | Number | Number of saved searches |
| nrOfSocialTags | Number | Number of tags |

## Saved Items

Retrieve or modify saved items (favorites) in your MyEuropeana account

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
| username | String |  |
| items | SavedItem | See below |

##### SavedItem
| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| id | Number | Unique id for this specific Saved item record |
| europeanaId | String | EuropeanaID existing of collection id and record id |
| guid | String | Unique alternate id for record, can be used as link to europeana.eu portal |
| link | String | Link to json version of record |
| title | String |  |
| edmPreview | String | Link to image thumbnail, if available |
| type | String | record type: IMAGE / VIDEO / TEXT / SOUND / 3D |
| dateSaved | Timestamp | SavedItem creation date |

### Create saved items

#### Request for CREATE
HTTP request: get (required param action=CREATE) 
HTTP REST request: post or put

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| europeanaid | String | (optional) check the existance of a specific saved item |

### Delete saved items

#### Request for DELETE
HTTP request: get (required param action=DELETE) 
HTTP REST request: delete

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
| username | String |  |
| items | Tag | See below |

##### Tag

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| id | Number | Unique id for this specific tag record |
| europeanaId | String | EuropeanaID existing of collection id and record id |
| guid | String | Unique alternate id for record, can be used as link to europeana.eu portal |
| link | String | Link to json version of record |
| title | String |  |
| edmPreview | String | Link to image thumbnail, if available |
| type | String | record type: IMAGE / VIDEO / TEXT / SOUND / 3D |
| dateSaved | Timestamp | SavedItem creation date |
| tag | String |  |

#### Request for TAG CLOUD
REST HTTP request type: get (action parameter is required)

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | "TAGCLOUD" |

* the tagcloud action does not take any aditional parameters

#### Response for TAG CLOUD

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| username | String |  |
| items | TagCloud | See below |

##### TagCloud

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| label | String | The tag |
| count | Number | tag count |

### Create saved items

#### Request for CREATE
HTTP request: get (required param action=CREATE) 
HTTP REST request: post or put

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| europeanaid | String | (optional) check the existance of a specific saved item |
| tag | String | The tag to add for this object |

### Delete saved items

#### Request for DELETE
HTTP request: get (required param action=DELETE) 
HTTP REST request: delete

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| tagid | String | delete by tagid (returned by LIST action) |
| tag | String | delete by tag (can delete multiple tags) |
| europeanaid | String | Remove all tags binded to a Europeana Record (can delete multiple tags) |

* tag and europeanaid parameters can be used combined, tagid works only as single selection parameter.

## Saved Searches

Retrieve or modify saved searches in your MyEuropeana account

  http://europeana.eu/api/v2/mydata/savedsearch.json

Request parameter action is general for all actions, but can be replaced by 
REST http request types.

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | empty / "LIST" / "CREATE" / "DELETE" |

### Get Saved Searches

#### Request for LIST
REST HTTP request: get

List action takes no additional parameters

#### Response for LIST

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| username | String |  |
| items | SavedSearch | See below |

##### SavedSearch

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| id | Number | Unique id for this specific saved search record |
| query | String | query part of SavedSearch |
| queryString | String | complete saved search including refinements and paging |
| dateSaved | Timestamp | SavedItem creation date |

### Create saved search

Create a new saved search. Parameters are similar to API search.json (or on the portal).

#### Request for CREATE
HTTP request: get (required param action=CREATE) 
HTTP REST request: post or put

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| query | String | main search parameter |
| qf[] | String array | Refinements parameters (zero or more) |
| start | Number | Start number (paging) |

### Delete saved search

#### Request for DELETE
HTTP request: get (required param action=DELETE) 
HTTP REST request: delete

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| searchid | String | saves search id (returned by LIST action) |

