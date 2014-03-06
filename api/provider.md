---
layout: "api-page"
title: API Provider Query
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
| offset | String |  query | offset |
| pageSize | Number | query  | pageSize|
| countryCode | String | query | coide |

### Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| identifier  | String | The identifier of a provider assigned by Europeana, (ie 00916) |
| country     | String | The iso value of the provider country, (ie fr) |
| name        | String | The provider name (ie K-samsök) |
| acronym     | String | The provider acronym (ie SOCH) |
| altname     | String | The provider alternative name |
| scope       | String | The provider scope (ie Cross/Single/Thematic/Individual) |
| domain      | String | The provider domain (ie Gallery/Library/Archive/Museum) |
| geolevel    | String | The provider geographic level of operation (Regiona/Nationa/European/Worldwide) |
| role        | String | The provider Role/ Relationship to Europeana (Aggregator/Data Provider)  |
| website     | String | The oragization's website |


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
| identifier  | String | The dataset identifier assigned by Europeana (ie: 0091650) |
| provIdentifier     | String | The identifier of the provider of the dataset, (ie: 00916)  |
| providerName     | String | The name of the provider of the dataset (ie: K-samsök) |
| name     | String | The name of the dataset (ie: 91626_Ag_SE_SwedishNationalHeritage_tm_obj) |
| status     | String | The current status of the specific dataset in the europeana ingestion lifecycle |
| publishedRecords     | Number | The number of cerords that belong to this dataset and are publiched to the portal |
| deleteRecords     | Number | The number opf records that heve been Removed/Deleted |
| creationDate     | Date | The Registration Data of this dataset |


## Dataset

Retrieve information about a specific dataset. Returns the same fields as the previous call.

	http://europeana.eu/api/v2/dataset/[datasetID].json

### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| datasetID | Number |  path | Identifier of the dataset to retrieve|