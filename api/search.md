---
layout: "api-page"
title: Search
published: true
---

* TOC
{:toc}

Search for records.

    http://europeana.eu/api/v2/search.json

## Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| query | String | The search term(s). See [Query Syntax](/api/query) for information on forming complex queries and examples. |
| profile | String | Profile parameter controls the format and richness of the response. See the possible values of the [profile parameter](#profile-parameter). |
| qf | String | Facet filtering query. This parameter can be defined more than once. See [Query Syntax](/api/query) page for more information. |
| rows | Number | The number of records to return. Maximum is 100. Defaults to 12. |
| start | Number | The item in the search results to start with. The first item is 1. Defaults to 1. |
| callback | String | Name of a client side [callback function](/api/getting-started/#callback-function). |
| reusability | String | Filter by copyright status. Possible values are open, restricted or permission, see [reusability parameters](#reusability-parameter). |
| facet | String | Name of an individual facet. See [individual facets](#individual-facets) |
| f.[facet name].facet.limit | Number | Number of values an individual facet should contain. The [facet name] part should be replaced with one of the the facet names you specified in `facet` parameter. See [individual facets](#individual-facets) |
| f.[facet name].facet.offset | Number | The offset of the first value in an individual facet. The [facet name] part should be replaced with one of the the facet names you specified in `facet` parameter. See [individual facets](#individual-facets) |

### Profile parameter

We have two profile types: one to control which fields of the record should be in the result, and the other to control other data elements of the result.

| Value | Description |
|:------|:------------|
| minimal | Returns minimal set of metadata. See [metadata sets](/api/search/#metadata-sets). |
| standard | Returns a boarder set of metadata. See [metadata sets](/api/search/#metadata-sets). |
| rich | Returns the broadest set of metadata. See [metadata sets](/api/search/#metadata-sets). |
| facets | Information about [facets](/api/repository/#facets) is added. For the records the Standard profile is used. |
| breadcrumbs | information about the query is added in the form of [breadcrumbs](/api/search/#breadcrumb). Facets are added as well; for the records the Standard profile is used. |
| params | The header of the response will contain a params key, which lists the requested and default parameters of the API call. |
| portal | `standard`, `facets`, and `breadcrumb` combined, plus additional fields over `standard` metadata set.  See [metadata sets](/api/search/#metadata-sets). |

### Reusability parameter

The possible values of the reusability parameters

| Value | Description |
|:------|:------------|
| open | The records are freely reusable. The licenses in this category are [NOC](http://creativecommons.org/publicdomain/mark/), [CC-ZERO](http://creativecommons.org/publicdomain/zero/1.0/), [CC-BY](http://creativecommons.org/licenses/by/), [CC-BY-SA](http://creativecommons.org/licenses/by-sa/) |
| restricted | The records are reusable, but with restrictions. The licenses in this category are [CC-BY-NC](http://creativecommons.org/licenses/by-nc/), [CC-BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/), [CC-BY-NC-ND](http://creativecommons.org/licenses/by-nc-nd/), [CC-BY-ND](http://creativecommons.org/licenses/by-nd/), [OOC-NC](http://www.europeana.eu/rights/out-of-copyright-non-commercial/) |
| permission | You can reuse the records only with explicit permission. |

## Response

For the common data fields returned by both search and object response, see Getting started guide's [response](/api/getting-started/#response) section.

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| itemsCount | Number | The number of retrieved records |
| totalResults | Number | The total number of results |
| items | Array ([Item](#item)) | This is a collection of search results. Each item is represented by a summary of the metadata record. The actual content is dependent of the profile parameter. |
| facets | Array ([Facet](#facet)) | A collection of facets that describe the resultant dataset. |
| breadcrumbs | Array ([Breadcrumb](#breadcrumb)) | A collection of search queries that were applied in this call. |


### item

Each item is a search result and is represented by a summary of its metadata record. The actual content depends of the profile parameter, see [metadata sets](/api/search/#metadata-sets).

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| europeanaCompleteness | Number | A number from 1 to 10 that is an internal measure of the metadata quality. It is based on the availability of mandatory and optional schema fields. |
| dataProvider | Array (String) | The names of Europeana Data Providers who provided the object. |
| europeanaCollectionName | Array (String) | The names of the Europeana collections that contain the item |
| id | String | The Europeana ID of the record. |
| guid | String | A link to the object page on the Europeana portal to be used by client applications. |
| link | String | A link to the API object call. This link should be used to retrieve the full metadata object. |
| provider | String | The name or identifier of the provider of the object.|
| rights | Array (String) | A collection of URLs referring to the object rights. |
| type | String | The type of the provided object (TEXT, VIDEO, SOUND, IMAGE, 3D) |
| dcCreator | Array (String) | A collection entities primarily responsible for making the resource. |
| edmConceptLabel | String | The label of the SKOS Concept of the record. Find more in [EDM Definition](http://pro.europeana.eu/documents/900548/bb6b51df-ad11-4a78-8d8a-44cc41810f22) |
| edmPreview | String | A link to the representation of the object on Europeana. |
| edmTimespanLabel | String | The label of EDM Time Span object of the record. Find more in [EDM Definition](http://pro.europeana.eu/documents/900548/bb6b51df-ad11-4a78-8d8a-44cc41810f22) |
| language | Array (String) | Languages assigned to the resource with reference to the Provider.  Usually, this field contains the languages of the metadata of the record. |
| title | Array (String) | The main and alternative titles of the item. |
| year | Array (String) | A point of time associated with an event in the life of the original analog or born digital object. Find more in [EDM Definition](http://pro.europeana.eu/documents/900548/bb6b51df-ad11-4a78-8d8a-44cc41810f22) |
| edmIsShownAt | Array (String) | The URL of a web view of the object in full information context. |
| edmPlaceLatitude | Array (String) | The latitude of a spatial thing (decimal degrees). |
| edmPlaceLongitude | Array (String) | The longitude of a spatial thing (decimal degrees). |
| score | Number | The relevancy score calculated by the search engine. Depends of the query. |
| edmConceptTerm | Array (String) | A SKOS Concept. |
| edmConceptPrefLabel |  | The preferred form of the name of the concept. |
| edmConceptBroaderTerm | Array (String) | The identifier of a broader concept in the same thesaurus or controlled vocabulary |
| edmConceptBroaderLabel |  | A human readable name of a broader concept. |
| edmTimespanBegin | Array (String) | The date the timespan started. |
| edmTimespanEnd | Array (String) | The date the timespan finished. |
| edmTimespanBroaderTerm | Array (String) | ts_dcterms_isPartOf |
| edmTimespanBroaderLabel | edm:TimeSpan/dcterms:isPartOf | ts_dcterms_isPartOf |
| ugc | Array (Boolnean) | Whether or not has user generated contents in the record |
| country | Array (String) | The name of the country in which the Provider is based or “Europe” in the case of Europe-wide projects. |
| edmPlaceBroaderTerm | Array (String) | pl_dcterms_isPartOf |
| edmPlaceAltLabel |  | Alternative forms of the name of the place. |
| dctermsIsPartOf | Array (String) | A related resource in which the described resource is physically or logically included. |
| dctermsSpatial | Array (String) | Spatial characteristics of the resource. |
| edmPlace | Array (String) | The URI of an EDM Place object. |
| edmTimespan | Array (String) | The URI of an EDM Timespan object. |
| edmAgent | Array (String) | The URI of an EDM Agent object |
| edmAgentLabel |  | Name of the agent. |
| dcContributor | Array (String) | An entity responsible for making contributions to the resource. |
| isShownBy | Array (String) | The URL of a web view of the object. |
| dcDescription | Array (String) | A description of the resource. |
| edmLandingPage | Array (String) | This property captures the relation between an aggregation representing a cultural heritage object and the Web resource representing that object on the provider’s web site. |
| timestamp_created_epoch | Number | UNIX timestamp of the date when record were created |
| timestamp_update_epoch | Number | UNIX timestamp of the date when record were last updated |
| timestamp_created | String | [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format of the date when record were created |
| timestamp_update | String | [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format of the date when record were last updated |

### breadcrumb

A collection of search queries that were applied in this call.

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| display | String | Human-readable description of the search |
| param | String | The search parameter name (**query** or **qf**) |
| value | String | The search parameter value |
| href | String | The search part of the URL which can be reused in further calls |
| last | Boolean | Boolean value indicating whether the current breadcrumb is the last one |

### facet

A collection of facets that describe the resultant dataset.

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| name | String | The name of the facet (COUNTRY, DATA_PROVIDER, LANGUAGE, PROVIDER, RIGHTS, TYPE, UGC, YEAR or a custom facet) |
| fields<sup>\*</sup> | Array (field) | A collection of facet fields. Each field is an object that has a label (String) and a count of objects (Number). |

<sup>\*</sup> _indicates an obligatory property_

## Metadata sets

### Minimal profile

The minimal profile returns the follwoing fields:

| Name in API response | EDM field | Name is searching |
|:-------------|:-------------|:-----|
| dataProvider | ore:Aggregation/edm:dataProvider | provider_aggregation_edm_dataProvider |
| dcCreator | edm:ProvidedCHO/dc:creator | proxy_dc_creator |
| edmIsShownAt | ore:Aggregation/edm:isShownAt | provider_aggregation_edm_isShownAt |
| edmPlaceLatitude | edm:Place/wgs84_pos:lat | pl_wgs84_pos_lat |
| edmPlaceLongitude | edm:Place/wgs84_pos:long | pl_wgs84_pos_long |
| edmPreview | <br> | europeana_aggregation_edm_preview |
| europeanaCompleteness | <br> | COMPLETENESS |
| guid | <br> | <br> |
| id | <br> | europeana_id |
| link | <br> | <br> |
| provider | ore:Aggregation/edm:provider | PROVIDER |
| rights | ore:Aggregation/edm:rights | RIGHTS |
| score | <br> | score |
| title | edm:ProvidedCHO/dc:title, edm:ProvidedCHO/dcterms:alternative | title |
| type | <br> | TYPE |
| year | <br> | YEAR |


### Standard profile

The standard profile returns all the fields of the minimal profile plus and the following fields:

| Name in API response | EDM field | Name is searching |
|:-------------|:-------------|:-----|
| edmConceptTerm | skos:Concept/@rdf:about | skos_concept |
| edmConceptPrefLabel | skos:Concept/skos:prefLabel | cc_skos_prefLabel |
| edmConceptBroaderTerm | skos:Concept/skos:broader | cc_skos_broader |
| edmConceptBroaderLabel | skos:Concept/skos:broader | cc_skos_broader |
| edmTimespanLabel | edm:TimeSpan/skos:prefLabel | ts_skos_prefLabel |
| edmTimespanBegin | edm:TimeSpan/edm:begin | ts_edm_begin |
| edmTimespanEnd | edm:TimeSpan/edm:end | ts_edm_end |
| edmTimespanBroaderTerm | edm:TimeSpan/dcterms:isPartOf | ts_dcterms_isPartOf |
| edmTimespanBroaderLabel | edm:TimeSpan/dcterms:isPartOf | ts_dcterms_isPartOf |
| recordHashFirstSix | <br> | europeana_recordHashFirstSix |
| ugc | ore:Aggregation/edm:ugc | UGC |
| completeness | <br> | COMPLETENESS |
| country | edm:EuropeanaAggregation/edm:country | COUNTRY |
| europeanaCollectionName | <br> | europeana_collectionName |
| edmPlaceBroaderTerm | edm:Place/dcterms:isPartOf | pl_dcterms_isPartOf |
| edmPlaceAltLabel | edm:Place/skos:altLabel | pl_skos_altLabel |
| dctermsIsPartOf | edm:Place/dcterms:isPartOf | pl_dcterms_isPartOf |
| timestampCreated | <br> | timestamp_created |
| timestampUpdate | <br> | timestamp_update |
| language | edm:EuropeanaAggregation/edm:language | LANGUAGE |

### Portal profile

The portal profile returns all the fields of the standard profile plus and the following fields:

| Name in API response | EDM field | Name is searching |
|:-------------|:-------------|:-----|
| dctermsSpatial | edm:ProvidedCHO/dcterms:spatial | proxy_dcterms_spatial |
| edmPlace | edm:Place/@rdf:about | edm_place |
| edmTimespan | edm:TimeSpan/@rdf:about | edm_timespan |
| edmAgent | edm:Agent/@rdf:about | edm_agent |
| edmAgentLabel | edm:Agent/skos:prefLabel | ag_skos_prefLabel |
| dcContributor | edm:ProvidedCHO/dc:contributor | proxy_dc_contributor |


### Rich profile

The rich profile returns all the fields of the portal profile plus the following fields:

| Name in API response | EDM field | Name in search parameters |
|:-------------|:-------------|:-----|
| edmIsShownBy | ore:Aggregation/edm:isShownBy | provider_aggregation_edm_isShownBy |
| dcDescription | edm:ProvidedCHO/dc:description | proxy_dc_description |
| edmLandingPage | edm:EuropeanaAggregation/edm:landingPage | europeana_aggregation_edm_landingPage |

## Individual facets

So far the user could get only the default Europeana facet set. From now on API users can select which facets they would like to retrieve via the `facet` parameter. When you request facet you have to set the profile either as `facets` or as `portal` (which covers facets as well).

The value of the parameter could be "DEFAULT" (which is a shortcut of the Europeana facet set we make use on the portal, which contains UGC, LANGUAGE, TYPE, YEAR, PROVIDER, DATA_PROVIDER, COUNTRY and RIGHTS), or any field name which is indexed and stored in Apache Solr.
We maintain a table in API documentation about the existing  (API Fields)[/api/api-fields/]. In the field type column "text" means indexed as as a row of distinct terms, while "string" means indexed as phrase, so the whole content is taken as one individual unit.

Users can set one or more facets in one query.

Requesting a single facet:

    &facet=proxy_dc_contributor&profile=facets
    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=paris&facet=proxy_dc_contributor&profile=facets

[Test on API Console](/api/console/?function=search&query=paris&facet=proxy_dc_contributor&profile=facets)
    
Requesting multiple facets can be done with three different syntaxes. You can add multiple facet parameters, or one facet parameter with multiple values separated by commas or spaces:

Multiple facet parameters:

    &facet=proxy_dc_coverage&facet=proxy_dc_contributor&profile=facets
    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=paris&facet=proxy_dc_coverage&facet=proxy_dc_contributor&profile=facets

[Test on API Console](/api/console/?function=search&query=paris&facet=proxy_dc_coverage&facet=proxy_dc_contributor&profile=facets)

Multiple facets separated by commas

    &facet=proxy_dc_coverage,proxy_dc_contributor&profile=facets
    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=paris&facet=proxy_dc_coverage,proxy_dc_contributor&profile=facets

[Test on API Console](/api/console/?function=search&query=paris&facet=proxy_dc_coverage,proxy_dc_contributor&profile=facets)

Multiple facets separated by spaces

    &facet=proxy_dc_coverage%20proxy_dc_contributor&profile=facets
    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=paris&facet=proxy_dc_coverage%20proxy_dc_contributor&profile=facets

[Test on API Console](/api/console/?function=search&query=paris&facet=proxy_dc_coverage%20proxy_dc_contributor&profile=facets)

    &facet=proxy_dc_coverage+proxy_dc_contributor&profile=facets
    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=paris&facet=proxy_dc_coverage+proxy_dc_contributor&profile=facets

[Test on API Console](/api/console/?function=search&query=paris&facet=proxy_dc_coverage%20proxy_dc_contributor&profile=facets)

Requesting the default facets:

    &profile=portal
    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=paris&profile=portal

[Test on API Console](/api/console/?function=search&query=paris&profile=portal)

    &profile=facets
    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=paris&profile=facets

[Test on API Console](/api/console/?function=search&query=paris&profile=facets)

    &facet=DEFAULT&profile=facets
    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=paris&facet=DEFAULT&profile=facets

[Test on API Console](/api/console/?function=search&query=paris&facet=DEFAULT&profile=facets)

Combining default facets with custom facets:

    &facet=DEFAULT+proxy_dc_contributor&profile=facets
    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=paris&facet=DEFAULT+proxy_dc_contributor&profile=facets

[Test on API Console](/api/console/?function=search&query=paris&facet=DEFAULT%20proxy_dc_contributor&profile=facets)

### Offset and limit of facets

The API user can set how many facet values she would like to retrieve, and which should be the first one. With this parameters, she can page over all facet values without requesting too much at a time. The limit and offset parameter syntax is a little bit tricky, but if you are familiar with Apache Solr syntax, it won't be strange, because it is the same.

    Syntax: f.[facet name].facet.limit
    Example: &f.PROVIDER.facet.limit=30
    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=paris&facet=PROVIDER&profile=facets&f.PROVIDER.facet.limit=30

[Test on API Console](/api/console/?function=search&query=paris&facet=PROVIDER&profile=facets&f.PROVIDER.facet.limit=30)

    Syntax: f.[facet name].facet.offset
    Example: &f.PROVIDER.facet.offset=30
    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=paris&facet=PROVIDER&profile=facets&f.PROVIDER.facet.offset=30

[Test on API Console](/api/console/?function=search&query=paris&facet=PROVIDER&profile=facets&f.PROVIDER.facet.offset=30)

Both parameter accepts numeric values.

The default offset value is 0, it means no offset, the first item to return is the first item in the list. 1 offset the list by one, so the first item to return is the second and so on.

In limit 0 means not to return anything.

The special `DEFAULT` shortcut works here as well, and it limit the facets which are part of the above mentioned set. So `&f.DEFAULT.facet.limit=20` works for RIGHTS, and PROVIDER, but doesn't work for non default facets such as proxy_dc_contributor.
