---
layout: api-page
title: API Change Log
---

* TOC
{:toc}

This document describes the changes of Europeana API. The changes are grouped by new API versions. We deploy new versions of the portal and API quite regularly, but not all new versions result in changes in the interface. The API documentation always describes the current version of the API. <!-- We don't have (yet?) however API call to get the actual version, so the API users should see the date of changes.-->

## Version 2-0-12 (2014-06-18)

### /v2/translateQuery.json

Translate a term to different languages and return a query string to use in the search API method. Right now this functionality is a wrapper around a Wikipedia API call.

Request parameters:

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| wskey | String |Your API key |
| languageCodes | String | The ISO language codes separated by commas or spaces |
| term | String | The term to translate |

Returns

| Name | Datatype | Description |
|:--------|:-------------|:-----|
| translations | Array | A list of translations. Each translation contains two fields:<br>text: the text of the translation<br>languageCode: the ISO language code of the translation |
| translatedQuery | String | A query string where each translations are concatenated by the boolean OR operator. |

Example

Get the translations of Notre Dame

    http://europeana.eu/api/v2/translateQuery.json?languageCodes=nl,en,hu&wskey=xxxxxxxx&term=notre%20dame

It returns

```JavaScript
{
  "apikey": "xxxxxxxx",
  "action": "translateQuery.json",
  "success": true,
  "requestNumber": 8957,
  "translations": [
    {
      "text": "Notre-Dame",
      "languageCode": "nl"
    },
    {
      "text": "Notre Dame",
      "languageCode": "en"
    },
    {
      "text": "Notre Dame",
      "languageCode": "de"
    }
  ],
  "translatedQuery": "Notre-Dame OR \"Notre Dame\""
}
```

For background information see the blog post [Improving search across languages](http://blog.europeana.eu/2014/08/improving-search-across-languages/)

### Renaming field "europeanaCollectionName" to "edmDatasetName"

Following the change in Europeana Data Model schema, we add edmDatasetName with the same content as the europeanaCollectionName. For a grace period we keep both fields, but next year we will return only edmDatasetName, so please update your API client. The field is available in search, object and provider calls.

## Version 2.0.10 (2014-02-13)

### Timestamps of creation and modification

New values in search and full record responses, giving information about when the particular record was created and updated. We provide these information both as UNIX timestamp, and as a more human readable ISO 8601 format (ISO 8601 Data elements and interchange formats – Information interchange – Representation of dates and times.http://en.wikipedia.org/wiki/ISO_8601).

* __timestamp_created_epoch__: UNIX timestamp of the date when record were created
* __timestamp_update_epoch__: UNIX timestamp of the date when record were last updated
* __timestamp_created__: ISO 8601 format of the date when record were created
* __timestamp_update__: ISO 8601 format of the date when record were last updated

Examples

Search response:

```JavaScript
{
  "apikey": "xxxxxxxxxx",  
  "action": "search.json",  
  ...
  "items": [
    {
      ...
      "timestamp_created_epoch": 1385744622879,
      "timestamp_update_epoch": 1385744622879,
      "timestamp_created": "2013-11-29T18:03:42.879Z",
      "timestamp_update": "2013-11-29T18:03:42.879Z"
      ...
    },
    ...
  ],
  ...
}
```

Record response:

```JavaScript
{
  "apikey": "xxxxxxxxxx",  
  "action": "record.json",  
  ...
  "object": {
    ...
    "timestamp_created_epoch": 1385744622879,
    "timestamp_update_epoch": 1385744622879,
    "timestamp_created": "2013-11-29T18:03:42.879Z",
    "timestamp_update": "2013-11-29T18:03:42.879Z"
  },
  ...
}
```

You even search for this information:

Searching for a particular date:

```
&query=timestamp_created:"2013-03-16T20:26:27.168Z"
&query=timestamp_updated:"2013-03-16T20:26:27.168Z"
```

searching for date range (as [date1 TO date2]):

```
&query=timestamp_created:["2013-03-15T19:58:36.43Z"+TO+"2013-04-15T19:58:36.43Z"]
&query=timestamp_updated:["2013-03-15T19:58:36.43Z"+TO+"2013-04-15T19:58:36.43Z"]
```

Solr's date mathematics is also works:
[xxx TO NOW] = untill now:

```
&query=timestamp_created:[2013-10-06T23:59:59.999Z+TO+NOW]
&query=timestamp_updated:[2013-10-06T23:59:59.999Z+TO+NOW]
```

[xxx TO NOW+1DAY] = untill tomorrow:

```
&query=timestamp_created:[2013-10-06T23:59:59.999Z+TO+NOW%2B1DAY]
&query=timestamp_updated:[2013-10-06T23:59:59.999Z+TO+NOW%2B1DAY]
```

[xxx TO NOW-1DAY] = untill yesterday:

```
&query=timestamp_created:[2013-10-06T23:59:59.999Z+TO+NOW-1DAY]
&query=timestamp_updated:[2013-10-06T23:59:59.999Z+TO+NOW-1DAY]
```

[NOW-2MONTH/DAY TO NOW/DAY] = last two months:

```
&query=timestamp_created:[NOW-2MONTH/DAY+TO+NOW/DAY]
&query=timestamp_updated:[NOW-2MONTH/DAY+TO+NOW/DAY]
```

Keep in mind, that + sign should be encoded as %2B, otherwise it will be taken as space, and results an invalid Solr query. More on Solr date math syntax: (http://lucene.apache.org/solr/4_6_0/solr-core/org/apache/solr/util/DateMathParser.html)

### Retrieving individual facets

So far the user could get the default facets Europeana set. From now on the API users can select which facets they would like to retrieve. We have introduced a new parameter: facet. When you request facet you have to set the profile either as facets or as portal (which covers facets as well).

The value of the parameter could be "DEFAULT" (which is a shortcut of the Europeana facet set we make use on the portal, which contains UGC, LANGUAGE, TYPE, YEAR, PROVIDER, DATA_PROVIDER, COUNTRY and RIGHTS), or any field name which is indexed and stored in Apache Solr.
We maintain a table in API documentation about the existing fields: http://europeana.eu/portal/api-fields.html. In the field type column "text" means indexed as as a row of distinct terms, while "string" means indexed as phrase, so the whole content is taken as one individual unit.

Users can set one or more facets in one query.

Requesting a single facet:

    &facet=proxy_dc_contributor&profile=facets

Requesting multiple facets can be done with three different syntaxes. You can add multiple facet parameters, or one facet parameter with multiple values separated by commas or spaces:

multiple facet parameters

    &facet=proxy_dc_coverage&facet=proxy_dc_contributor&profile=facets

multiple facets separated by commas

    &facet=proxy_dc_coverage,proxy_dc_contributor&profile=facets

multiple facets separated by spaces

    &facet=proxy_dc_coverage%20proxy_dc_contributor&profile=facets

    &facet=proxy_dc_coverage+proxy_dc_contributor&profile=facets

Requesting the default facets:

    &profile=portal

    &profile=facets

    &facet=DEFAULT&profile=facets

Combining default facets with custom facets:

    &facet=DEFAULT+proxy_dc_contributor&profile=facets

Offset and limit of facets

The API user can set how many facet values she would like to retrieve, and which should be the first one. With this parameters, she can page over all facet values without requesting too much at a time. The limit and offset parameter syntax is a little bit tricky, but if you are familiar with Apache Solr syntax, it won't be strange, because it is the same.

    f.[facet name].facet.limit such as &f.PROVIDER.facet.limit=30
    f.[facet name].facet.offset such as &f.PROVIDER.facet.offset=30

Both parameters accept numeric values.

The default offset value is 0, it means no offset, the first item to return is the first item in the list. 1 offset the list by one, so the first item to return is the second and so on.

In limit 0 means not to return anything.

The special DEFAULT shortcut works here as well, and it limit the facets which are part of the above mentioned set. So &f.DEFAULT.facet.limit=20 works for RIGHTS, and PROVIDER, but doesn't work for non default facets such as proxy_dc_contributor.


## Version 2.0.8 (2013-10-23)

### New parameter: reusability

The new `reusability` parameter can have two possible values: Open and Limited. It is an additional filter, which selects those items, which can be reusable free, or in a limited way. They are shorthands for a couple of right values:

Free:

* NOC: http://creativecommons.org/publicdomain/mark/
* CC-ZERO: http://creativecommons.org/publicdomain/zero/1.0/*
* CC-BY: http://creativecommons.org/licenses/by/
* CC-BY-SA: http://creativecommons.org/licenses/by-sa/

Limited:

* CC-BY-NC: http://creativecommons.org/licenses/by-nc/
* CC-BY-NC-SA: http://creativecommons.org/licenses/by-nc-sa/
* CC-BY-NC-ND: http://creativecommons.org/licenses/by-nc-nd/
* CC-BY-ND: http://creativecommons.org/licenses/by-nd/
* OOC-NC: http://www.europeana.eu/rights/out-of-copyright-non-commercial/

It has double effects 1) it filter the search result with the appropriate right values, 2) if facets are requested, it provides a new facet, called REUSABILITY.

Example:

```
http://localhost:8080/api/v2/search.json?wskey=api2demo&query=*:*&reusability=free&qf=TYPE:VIDEO&profile=portal
```

returns

```JavaScript
{
  "apikey": "xxxxxxxxxx",  
  "action": "search.json",  
  ...
  "items": [ … ],  
  ...
  "facets": [
    ...
    {  
      "name": "REUSABILITY",
      "fields": [
        {"label": "Limited", "count": 9795},
        {"label": "Free", "count": 3659}
      ]
    }
  ]
}
```


## Version 2.0.6 (2013-08-09)

### New response profile: params

New allowable value for the _profile_ parameter: `params`. When client adds `params` to the _profile_ parameter, the header of the response will contain a `params` key, which lists the requested and default parameters of the API call. The client can use profile _profile_ parameter in search and object calls. The parameter accepts both single and multiple values separated by comma or space (such as `&profile=standard` or `&profile=standard,params` or `&profile=standard%20params`).

Example:

```
http://europeana.eu/api/v2/search.json?wskey=xxxxxxxx&amp;query=mona+lisa&amp;profile=standard%20params
```

returns

```JavaScript
{
  "apikey": "xxxxxxxxx",
  "action": "search.json",
  "success": true,
  "requestNumber": 6,
  "params": {
    "query": "mona lisa",
    "profile": "standard params",
    "start": 1,
    "rows": 12
  },
  "itemsCount": 12,
  "totalResults": 195,
  "items": [...]
}
```

