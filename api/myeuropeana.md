---
layout: "api-page"
title: Accessing My Europeana via API
published: true
---

* TOC
{:toc}

## Introduction

Europeana API supports two methods to access MyEuropeana user data.

To access data of a specific account you can use MyData methods which require [authentication using the public and private key of the user](http://labs.europeana.eu/api/authentication/user_authentication).

Applications that wish to access MyEuropeana data of a specific end-user on his behalf need to authenticate using the [OAuth2 scheme](http://labs.europeana.eu/api/authentication/oauth2_authentication) and to use MyEuropeana set of methods.

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

Retrieve your MyEuropeana profile, including statistics about user's activity. This call is read-only.

    GET http://europeana.eu/api/v2/user/profile.json
    GET http://europeana.eu/api/v2/mydata/profile.json

### Response

Fields containing no data are not included in json response.

| Field | Datatype | Description |
|:------|:---------|:------------|
| email | String | TBD |
| userName | String | TBD |
| registrationDate | String | TBD (In timestamp format (Date.toLong)) |
| lastLogin | String | TBD (In timestamp format (Date.toLong)) |
| firstName | String | TBD |
| lastName | String | TBD |
| company | String | TBD |
| country | String | TBD |
| phone | String | TBD |
| address | String | TBD |
| website | String | TBD |
| fieldOfWork | String | TBD  |
| nrOfSavedItems | Number | The number of saved items |
| nrOfSavedSearches | Number | The number of saved searches |
| nrOfSocialTags | Number | The number of tags |

## Saved Items

Retrieve or modify saved items (favorites) at your MyEuropeana account.

### Get saved items

Retrieve saved items.

    GET http://europeana.eu/api/v2/user/saveditem.json
    GET http://europeana.eu/api/v2/mydata/saveditem.json

#### Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be LIST for this call) |
| europeanaID | String | (optional) The ID of a saved item |

#### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| username | String |  |
| items | Array([SavedItem](http://labs.europeana.eu/api/myeuropeana/saved_item)) |  |

#### SavedItem

Information about one saved item.

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| id | Number | The unique ID of this item |
| europeanaID | String | TBD (EuropeanaID existing of collection id and record id) |
| guid | String | TBD (Unique alternate id for record, can be used as link to europeana.eu portal) |
| link | String | Link to json version of record |
| title | String | TBD |
| edmPreview | String | Link to image thumbnail, if available |
| type | String | record type: IMAGE / VIDEO / TEXT / SOUND / 3D |
| dateSaved | String | SavedItem creation date |

### Create

Creates a new saved item.

    POST http://europeana.eu/api/v2/user/saveditem.json
    POST http://europeana.eu/api/v2/mydata/saveditem.json

#### Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be CREATE for this call) |
| europeanaid | String | TBD: (optional) check the existance of a specific saved item |

### Delete

Creates a saved item.

    DELETE http://europeana.eu/api/v2/user/saveditem.json
    DELETE http://europeana.eu/api/v2/mydata/saveditem.json

#### Request  

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be DELETE for this call) |
| itemid | String | The ID of the item to delete (use the IDs returned by LIST action) |
| europeanaid | String | The Europeana ID of the record to delete (TBD) |

## Tags

Retrieve information about, create, or delete tags at MyEuropeana account.

### Get 

Get a tag.

    GET http://europeana.eu/api/v2/user/tag.json
    GET http://europeana.eu/api/v2/mydata/tag.json

#### Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be LIST for this call) |
| europeanaid | String | (optional) check the existance of a specific saved item |

#### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| username | String |  |
| items | Array([Tag](http://labs.europeana.eu/api/myeuropeana/tag)) |  |

#### Tag

Information about a single tag.

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

### Get Tag Cloud 

#### Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be TAGCLOUD for this call) |


#### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| username | String |  |
| items | Array([TagCloud](http://labs.europeana.eu/api/myeuropeana/tagcloud)) |  |

#### TagCloud

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| label | String | The tag |
| count | Number | tag count |

### Create 

Create a new tag.

    GET http://europeana.eu/api/v2/user/tag.json
    GET http://europeana.eu/api/v2/mydata/tag.json

#### Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be CREATE for this call) |
| europeanaid | String | (optional) check the existance of a specific saved item |
| tag | String | The tag to add for this object |

### Delete

Delete a tag.

    DELETE http://europeana.eu/api/v2/user/tag.json
    DELETE http://europeana.eu/api/v2/mydata/tag.json

## Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| tagid | String | delete by tagid (returned by LIST action) |
| tag | String | delete by tag (can delete multiple tags) |
| europeanaid | String | Remove all tags binded to a Europeana Record (can delete multiple tags) |

* tag and europeanaid parameters can be used combined, tagid works only as single selection parameter.

## Saved Searches

Retrieve or modify saved searches in your MyEuropeana account

### Get 

Get saved searches.

    GET http://europeana.eu/api/v2/user/savedsearch.json
    GET http://europeana.eu/api/v2/mydata/savedsearch.json

### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| username | String |  |
| items | Array([SavedSearch](http://labs.europeana.eu/api/myeuropeana/savedsearch)) |  |

### SavedSearch

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| id | Number | Unique id for this specific saved search record |
| query | String | query part of SavedSearch |
| queryString | String | complete saved search including refinements and paging |
| dateSaved | Timestamp | SavedItem creation date |

### Create 

Create a new saved search. Parameters are similar to API search.json (or on the portal).

    POST http://europeana.eu/api/v2/user/savedsearch.json
    POST http://europeana.eu/api/v2/mydata/savedsearch.json

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be CREATE for this call) |
| query | String | main search parameter |
| qf[] | String array | Refinements parameters (zero or more) |
| start | Number | Start number (paging) |

### Delete

Delete a saved search.

    DELETE http://europeana.eu/api/v2/user/savedsearch.json
    DELETE http://europeana.eu/api/v2/mydata/savedsearch.json

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be DELETE for this call) |
| searchid | String | saves search id (returned by LIST action) |
