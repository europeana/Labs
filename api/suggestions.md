---
layout: "api-page"
title: Suggestions
published: true
---

* TOC
{:toc}

Get autocompletion recommendation for search queries. This call returns a list of Europeana records that contain a query term in one of their fields.

    http://europeana.eu/api/v2/suggestions.json

## Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| query | String | The search term on which to search. |
| callback | String | Name of a client side [callback function](/api/getting-started/#callback-function). |
| rows | Number | The maximum number of results (the default is 10). |

Return all suggestions for the query 'paris':

    &query=paris
    http://www.europeana.eu/api/v2/suggestions.json?wskey=xxxx&query=paris

[Test on API Console](/api/console/?function=suggestions&query=paris)

## Response

A response to this call contains [the common fields](/api/getting-started/#response) which are standard for all Europeana API calls and the fields below which are specific for this call.

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| items | Array ([Item](/api/suggestions/#item)) | A collection of suggestion items. |

## Item

Each item represents a recommendation for search that contains the submitted item.

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| term | String | Search suggestion. |
| frequency | Number | Number of Europeana records that answer this suggestion. |
| field | String | [Aggregated fields](/api/data-hierarchy/#aggregated-fields) where the term was found. |
| query | String | [Search query](/api/query/) to search for the suggestion. |
