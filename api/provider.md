---
layout: "api-page"
title: API Provider Query
published: true
---

* TOC
{:toc}

## Providers

This page describes API calls that retrieve information about Europeana data providers and datasets that comprise the repository.

    http://europeana.eu/api/v2/providers.json
    
### Request  

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| offset | String |  |
| pageSize | Number | |
| countryCode | String |

### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|

## Provider

	http://europeana.eu/api/v2/provider/[providerID].json
    
### Request  

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| providerID | Number |  |


### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
    
## Datasets by Provider

	http://europeana.eu/api/v2/provider/[providerID]/datasets.json

### Request  

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| providerID | Number |  |


### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|


## Dataset

	http://europeana.eu/api/v2/dataset/[datasetID].json

### Request  

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| datasetID | Number |  dataset ID|


### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|


    
    