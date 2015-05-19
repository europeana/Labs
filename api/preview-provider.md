---
layout: "api-page2"
title: Querying Providers and Datasets
published: true
excerpt: "How to retrieve information about Europeana data providers and datasets"
---

This page describes the API calls that retrieve information about Europeana data providers and datasets that comprise the repository.

* TOC
{:toc}


## Providers

Retrieve information about all Europeana data providers.

    http://beta.europeana.eu/v2/providers.json

Alternatively, you can also use the [DATA_PROVIDER facet](/api/preview-data-fields/#metadata-facets) in a [Search Query](/api/preview-search/) to group results by and search for results by a provider.
    
### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| offset | String |  query | for paging needs - offset to start with |
| pagesize | Number | query  | for paging needs - size of the result set to fetch |
| countryCode | String | query | two-letters ISO 3166-1 country code |

List all providers from The Netherlands:

    &countryCode=NL
    http://beta.europeana.eu/v2/providers.json?wskey=xxxx&countryCode=NL

### Response

| EDM Field  | Name in search | Datatype | Description |
|:------------------|:--------|:-------------|:---------------|
| dc:identifier | identifier  | String | the internal identifier of the provider in Europeana |
| edm:country | country   | String | two-letters ISO 3166-1 code of the provider country |
| skos:prefLabel | name | String | the name of the provider |
| edm:acronym | acronym | String | the acronym commonly used to identify the organization|
| skos:altLabel | altname | String | the alternative name |
| edm:organizatonScope | scope | String | the scope (Cross/Single/Thematic/Individual) |
| edm:organizationDomain | domain | String | the domain (Gallery/Library/Archive/Museum) |
| edm:geographicLevel | geolevel | String | the level of operations (Regional/Nationa/European/Worldwide) |
| edm:europeanaRole | role | String | the type of the organisation with relation to Europeana (Aggregator/Data Provider)  |
| foaf:homepage | website | String | The website of the provider  |

## Provider

Retrieve information about a provider. Returns the same fields as the previous call.

	http://beta.europeana.eu/v2/provider/[providerID].json
    
### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| providerID | String |  path | The identifier of the provider. |

## Datasets by Provider

Retrieve information about datasets supplied by a specific data provider.

	http://beta.europeana.eu/v2/provider/[providerID]/datasets.json

Alternatively, you can also construct a [Search Query](/api/search) with a custom dataset facet to group results by and search for results by dataset.

	http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=europeana_collectionName:*&facet=europeana_collectionName&f.europeana_collectionName.facet.limit=2000&profile=facets

### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| providerID | String |  path | The identifier of the provider |

### Response

| EDM Field | Name in search | Datatype | Description |
|:-------------------|:-------------|:-------------|:----------|
| dc:identifier | identifier  | String | the internal identifier of the dataset in Europeana derived from the edm:datasetName |
| dc:identifier | provIdentifier | String | the internal identifier of the provider of the dataset  |
| edm:provider | providerName | String | the name of the provider of the dataset  |
| edm:datasetName | edmDatasetName | String | the name of the dataset  |
| adms:status | status | String | the current status of the dataset in the europeana ingestion lifecycle |
| dcterms:extent | publishedRecords  | Number | the number of records that belong to this dataset and are published on the Europeana Portal |
| N/A | deleteRecords | Number | The number of records that have been removed or deleted |
| dcterms:created | creationDate | Date | the date the dataset was created |


## Dataset

Retrieve information about a dataset. Returns the same fields as the previous call.

	http://beta.europeana.eu/v2/dataset/[datasetID].json

### Request  

| Parameter | Datatype | Type | Description |
|:-------------|:-------------|:-----|:-----|
| datasetID | Number |  path | Identifier of the dataset to retrieve|

