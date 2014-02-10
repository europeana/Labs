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

....

## Profile

Retrieve your MyEuropeana profile, including statistics.

```
http://europeana.eu/api/v2/mydata/profile.json
```

### Request

The request doesn't take any parameters.

### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| ? | ? | ? |


## Saved Items

...

```
http://europeana.eu/api/v2/mydata/saveditem.json
```

### Get saved items

#### Request for LIST
HTTP request type: get

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | empty or "LIST" |
| europeanaid | String | (optional) check the existance of a specific saved item |


### Response for LIST

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| ? | ? | ? |

#### Request for CREATE
HTTP request type: get / post or put

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | "CREATE" in case of a http get request |
| europeanaid | String | (optional) check the existance of a specific saved item |


#### Request for DELETE
HTTP request type: get / delete

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| action | String | "DELETE" in case of a http get request |
| itemid | String | itemid (returned by LIST action) |
| europeanaid | String | The Europeana ID of the record to delete |

## Saved Tags

...

```
http://europeana.eu/api/v2/mydata/tag.json
```

### Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| ? | ? | ? |


### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| ? | ? | ? |


## Saved Searches

...

```
http://europeana.eu/api/v2/mydata/savedsearch.json
```

### Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| ? | ? | ? |


### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| ? | ? | ? |
