---
layout: "api-page"
title: API Provider Query
published: true
---

* TOC
{:toc}

This page describes the API calls that retrieve information about Europeana data providers and datasets that comprise the repository.

## Providers

Retrieve information about all Europeana data providers.

    http://europeana.eu/api/v2/providers.json
    
### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| offset | String |  query | offset |
| pageSize | Number | query  | pageSize|
| countryCode | String | query | coide |

### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| identifier  | Number | The identifier of a provider assigned by Europeana, (ie 00916) |
| country     | String | The iso value of the provider country, (ie fr) |
| name        | String | The provider name (ie K-samsök) |
| acronym     | String | The provider acronym (ie SOCH) |
| altname     | String |  |
| scope       | String |  |
| domain      | String |  |
| geolevel    | String |  |
| role        | String |  |
| website     | String |  |


## Provider

Retrieve information about a single data provider. Returns the same fields as the previous call.

	http://europeana.eu/api/v2/provider/[providerID].json
    
### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| providerID | String |  path | The ID of the provider to retrieve |

    
## Datasets by Provider

Retrieve information about datasets supplied by a given data provider.

	http://europeana.eu/api/v2/provider/[providerID]/datasets.json

### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| providerID | String |  path | The ID of the provider |

### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| identifier  | Number |  |
| provIdentifier     | Number |  |
| providerName     | String |  |
| name     | String |  |
| status     | String |  |
| publishedRecords     | Number |  |
| deleteRecords     | Number |  |
| creationDate     | Date |  |


## Dataset

Retrieve information about a specific dataset. Returns the same fields as the previous call.

	http://europeana.eu/api/v2/dataset/[datasetID].json

### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| datasetID | Number |  path | Identifier of the dataset to retrieve|
