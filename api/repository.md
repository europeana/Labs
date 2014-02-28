
---
layout: "api-page"
title: Europeana Repository
published: true
---

* TOC
{:toc}

To organize its data Europeana uses a complex data model which is called the Europeana Data Model (EDM). A detailed description of EDM is beyond the scope of this documentation: the reader is referred to the extensive documentation on Europeana website. However, a basic understanding of the data organization is necessary for implementing the API. The objective of this section is to provide this basic understanding.

## Identifying Records

Digital records delivered to Europeana are assigned a unique identifier, Europeana ID, that serves to further identify the records when using the API. Usually, this identifier is based on the original metadata that are provided for the record and internal Europeana identifiers of the provider and the dataset containing the record. For example, a Europeana ID of an object can look as follows:

    /09102/_GNM_1234

where 091 is the identifier of the provider, 02 is the id of the dataset and _GNM_1234_ is derived from the unique identifier of the record in the context of the provider.

## Fields

Europeana data is organized in records which correspond to cultural heritage objects. Each object is described by a number of fields in the record which contain information such as the title of the object, its description, the date, persons and concepts related to it.

## Aggregated Fields

Europeana aggregates its data from cultural institutions that can use diverse, fine-grained systems and methodologies. As a result, a link between for example an object and a person may be stored in different specialized fields. To provide simpler views on this data, Europeana has introduced several general Aggregated Fields: title, who, what, when, and where. In these fields we gather together information from different record fields in order to make the discovery of objects easier. Title, for example, aggregates data from the dc:title and dcterms:alternative fields which are part of Dublin Core, a popular general standard for describing different types of resources.

## Facets

The number of records that Europeana contains is very big and growing. Therefore we need efficient ways to allow our users to discover what they need easily. One such technique is a faceted indexing system that classifies each record along multiple dimensions. The facets, seen on the left side of the Europeana portal, can be useful for filtering search results and can also be used by API users. Currently we support the following facets:

| Facet        | Description    | 
| ------------- |:-------------| 
| Media Type  |	A broad classification of objects into five material types that users may find useful for filtering purposes: text, image, sound, video, 3D. |
|Language |	A language of the record. |
|Date |	A point or period of time associated with an event in the lifecycle of the record |
|Country |	The name of the country of the data provider or "Europe" in the case of Europe-wide projects. |
|Copyrights |	Information about rights held in and over the resource. |
|Provider |	Europeana Provider |
|Completeness |	Internal Europeana measure of the completeness of the metadata of the record. |
|UGC	| Whether the record has been contributed by the user community |


