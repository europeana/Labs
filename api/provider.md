---
layout: "api-page"
title: Querying Providers and Datasets
published: true
---

This page describes the API calls that retrieve information about Europeana data providers and datasets that comprise the repository.

* TOC
{:toc}


## Providers

Retrieve information about all Europeana data providers.

    http://europeana.eu/api/v2/providers.json
    
### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| offset | String |  query | for paging needs - offset to start with |
| pageSize | Number | query  | for paging needs - size of the result set to fetch |
| countryCode | String | query | two-letters ISO 3166-1 country code. (TBD - is it so?) |

### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| identifier  | String | the internal identifier of the provider in Europeana |
| country     | String | two-letters ISO 3166-1 code of the provider country |
| name        | String | the name of the provider |
| acronym     | String | the acronym |
| altname     | String | the alternative name |
| scope       | String | the scope (TBD: Cross/Single/Thematic/Individual) |
| domain      | String | the domain (TBD: Gallery/Library/Archive/Museum) |
| geolevel    | String | the level of operations (Regional/Nationa/European/Worldwide) |
| role        | String | the type of the organisation with relation to Europeana (Aggregator/Data Provider)  |
| website     | String | The website of the provider  |


## Provider

Retrieve information about a provider. Returns the same fields as the previous call.

	http://europeana.eu/api/v2/provider/[providerID].json
    
### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| providerID | String |  path | The identifier of the provider. |

## Datasets by Provider

Retrieve information about datasets supplied by a specific data provider.

	http://europeana.eu/api/v2/provider/[providerID]/datasets.json

### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| providerID | String |  path | The identifier of the provider |

### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| identifier  | String | the internal identifier of the dataset in Europeana  |
| provIdentifier     | String | the internal identifier of the provider of the dataset  |
| providerName     | String | the name of the provider of the dataset  |
| name     | String | the name of the dataset (TBD: add information on identifying datasets to the repository page?) |
| status     | String | the current status of the dataset in the europeana ingestion lifecycle |
| publishedRecords     | Number | the number of records that belong to this dataset and are published on the Europeana Portal |
| deleteRecords     | Number | The number of records that have been removed or deleted (TBD: more info?) |
| creationDate     | Date | the date the dataset was created |


## Dataset

Retrieve information about a dataset. Returns the same fields as the previous call.

	http://europeana.eu/api/v2/dataset/[datasetID].json

### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| datasetID | Number |  path | Identifier of the dataset to retrieve|