---
layout: "api-page2"
title: OpenSearch RSS
published: true
---

* TOC
{:toc}

Basic search function following the OpenSearch specification (see [http://www.opensearch.org/](http://www.opensearch.org)), returning the results in XML (RSS) format. This function does not support facet search or profiles. Name of parameters are different from other API call methods, because they match the opensearch standard. The OpenSearch response elements can be used by search engines to augment existing XML formats with search-related metadata.

    http://beta.europeana.eu/v2/opensearch.rss

## Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| searchTerms | String | The search terms used to query the Europeana repository; similar to the query parameter in the [search method](/api/preview-search/). |
| count | Number | The number of search results to return; possible values can be any integer up to 100 [default = 12]. |
| startIndex | Number | The first object in the search result set to start with (first item = 1), e.g., if a result set is made up of 100 objects, you can set the first returned object to the 22nd object in the set [default = 1]. |

## Response

| Type | Description |
|:-------------|:-----|
| [opensearch](http://www.opensearch.org/Specifications/OpenSearch/1.1#OpenSearch_response_elements) | An OpenSearch XML Response. The OpenSearch response elements can be used by search engines to augment existing XML formats with search-related metadata. |
