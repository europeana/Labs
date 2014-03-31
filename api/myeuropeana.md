---
layout: "api-page"
title: Accessing MyEuropeana
published: true
excerpt: "MyEuropeana API allows you accessing personal user data stored on MyEuropeana accounts."
---

* TOC
{:toc}

The MyEuropeana part of the API allows you accessing personal user data stored on MyEuropeana accounts.

There are two methods to access MyEuropeana user data.

To access data of a specific account you can use MyData methods which require [authentication using the public and private key of the user](http://labs.europeana.eu/api/authentication/#user_authentication).

Applications that wish to access MyEuropeana data of a specific end-user on her behalf need to authenticate using the [OAuth2 scheme](http://labs.europeana.eu/api/authentication/#oauth2_authentication) and to use MyEuropeana set of methods.


## Profile

Retrieve your MyEuropeana profile, including statistics about user's activity. This call is read-only.

    GET http://europeana.eu/api/v2/user/profile.json
    GET http://europeana.eu/api/v2/mydata/profile.json

### Response

Fields containing no data are not included in JSON response. We added description where needed.

| Field | Datatype | Description |
|:------|:---------|:------------|
| email | String |  |
| userName | String |  |
| registrationDate | String | TBD (In timestamp format (Date.toLong)) |
| lastLogin | String | (In timestamp format (Date.toLong)) |
| firstName | String |  |
| lastName | String |  |
| company | String |  |
| country | String |  |
| phone | String |  |
| address | String |  |
| website | String |  |
| fieldOfWork | String |   |
| nrOfSavedItems | Number | The number of saved items |
| nrOfSavedSearches | Number | The number of saved searches |
| nrOfSocialTags | Number | The number of tags |

## Saved Items

Retrieve or modify saved items (favorites) at your MyEuropeana account.

### Get 

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
| items | Array([SavedItem](http://labs.europeana.eu/api/myeuropeana/saved_item)) | Collection of saved items |

#### SavedItem

Information about one saved item.

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| id | Number | The unique ID of this item |
| europeanaID | String | [Europeana ID](http://labs.europeana.eu/api/data-hierarchy/#identifying_records) of the item |
| guid | String | Link to the item on Europeana Portal |
| link | String | Link to the JSON representation of the item |
| title | String |  |
| edmPreview | String | Link to the content thumbnail, if available |
| type | String | Media type of the record: IMAGE / VIDEO / TEXT / SOUND / 3D |
| dateSaved | String | Creation date |

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

Deletes a saved item.

    DELETE http://europeana.eu/api/v2/user/saveditem.json
    DELETE http://europeana.eu/api/v2/mydata/saveditem.json

#### Request  

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be DELETE for this call) |
| itemid | String | The ID of the item to delete (use the IDs returned by LIST action) |
| europeanaid | String | [Europeana ID](http://labs.europeana.eu/api/data-hierarchy/#identifying_records) of the record to delete (TBD) |

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
| europeanaid | String |  |

#### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| username | String |  |
| items | Array([Tag](http://labs.europeana.eu/api/myeuropeana/tag)) |  |

#### Tag

Information about a single tag.

TBD

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
| label | String | The tag name |
| count | Number | Tag count |

### Create 

Create a new tag.

    GET http://europeana.eu/api/v2/user/tag.json
    GET http://europeana.eu/api/v2/mydata/tag.json

#### Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be CREATE for this call) |
| europeanaid | String | TBD |
| tag | String | The tag to add for this object |

### Delete

Delete a tag.

    DELETE http://europeana.eu/api/v2/user/tag.json
    DELETE http://europeana.eu/api/v2/mydata/tag.json

## Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| tagid | String | Delete by tagid (returned by LIST action) |
| tag | String | Delete by tag name (can resut in deletion of many tags) |
| europeanaid | String | Remove all the tags bound to this Europeana Record |

* tag and europeanaid parameters can be used together, tagid works only as single selection parameter.

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
| items | Array([SavedSearch](http://labs.europeana.eu/api/myeuropeana/savedsearch)) | Collection of saved searches  |

### SavedSearch

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| id | Number | ID of the saved search |
| query | String | Query executed by this saved search |
| queryString | String | Complete query string of this saved search, including refinements and paging |
| dateSaved | Timestamp | Creation date |

### Create 

Create a new saved search. Read more on the search parameters in [Query Syntax](http://labs.europeana.eu/api/query/).

    POST http://europeana.eu/api/v2/user/savedsearch.json
    POST http://europeana.eu/api/v2/mydata/savedsearch.json

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be CREATE for this call) |
| query | String | Main query parameter |
| qf | Array(String)| [Refinements](http://labs.europeana.eu/api/query/#refinements) array |
| start | Number | Start number for paging |

### Delete

Delete a saved search.

    DELETE http://europeana.eu/api/v2/user/savedsearch.json
    DELETE http://europeana.eu/api/v2/mydata/savedsearch.json

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | Action parameter (should be DELETE for this call) |
| searchid | String | ID of the saved search (as returned by LIST action) |
