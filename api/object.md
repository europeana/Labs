---
layout: "api-page"
title: API Object Method
published: true
---

* TOC
{:toc}

Retrieve a single record from the Europeana dataset.

    http://europeana.eu/api/v2/record/[recordID].json
    
    
## Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| recordID | String | The [Europeana ID](http://www.europeana.eu/portal/api-data-structure.html#EuropeanaID) of the record to retrieve. |
| callback| String| Name of a client side callback function.|
| profile | String | A number of profiles can be added to a search to control the format and richness of the response TBD (add profiles) |


## Response

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
| object |   [Object](#object) |  The object representing an EDM metadata record |
| similarItems |   Array([item](#item)) |  A collection of metadata records similar to the current one. Available only if profile parameter’s value is set to **similar**. The structure of each record is the same as the structure of the items collection returned by the [search](http://labs.europeana.eu/api/search) method. |


### object 

| Field | Datatype | Description |
|:-------------|:-------------|:-----|
|about|     String|The Europeana ID of the returned record.|
|agents|Array (Agent)|A collection of Agent objects contextually related to this record. Find more in the EDM Definition.|
|aggregations|Array (Aggregation)|A collection of Aggregation objects related to the record. Find more in the EDM Definition.|
|concepts|Array (Concept)|A collection of Concept objects contextually related to this record. Find more in the EDM Definition.|
|country|Array (String)| TBD |
|europeanaAggregation|Array (EuropeanaAggregation)|A collection of Europeana Aggregation objects related to the record. Find more in the EDM Definition.|
|europeanaCollectionName|Array (String)|A collection of collection identifiers that this record belongs to (TBD).|
|europeanaCompleteness|Number|     A number between 0 and 10 representing the metadata quality of the record. |
|language|     Array (String)|     |
|optOut|     Boolean|     |
|places|     Array (Place)|     A collection of Place objects contextually related to the record. Find more in the EDM Definition.|
|provider|     Array (String)|     |
|providedcHOs|     Array ([ProvidedCHO](#ProvidedCHO)|     A collection of Provided Cultural Heritage Objects related to the record. Find more in the EDM Definition.|
|proxies|     Array ([Proxy](#Proxy))|     A collection of proxy objects for Provided Cultural Heritage Objects. Find more in the EDM Definition.|
|timespans|     Array ([TimeSpan](#TimeSpan))|     |
|timestamp|     Date|     |
|title|     Array (String)|     The main and alternative titles of the item. |
|type|     String|     The type of the object (see the TYPE facet) |
|userTags|     Array (String)|     |
|year|     Array (String)|     |


### EDM Agent

An EDM Agent class. This class comprises people, either individually or in groups, who have the potential to perform intentional actions for which they can be held responsible.


| Field | Qualified Name | Datatype | Description |
|:-------------|:-------------|:-----|
|Field|     Qualified Name|     Data type|     Description |
|about|     rdf:about|     String|     The URI of the object, usually a DBpedia URL.|
|prefLabel|     skos:prefLabel|     LangMap|     Preferred lexical label.|
|altLabel|     skos:altLabel|     LangMap|     Alternative lexical label.|
|hiddenLabel|     skos:hiddenLabel|     LangMap|     A hidden lexical label, represented by means of the skos:hiddenLabel property, is a lexical label for a resource, where a KOS designer would like that character string to be accessible to applications performing text-based indexing and search operations, but would not like that label to be visible otherwise.|
|note|     skos:note|     LangMap|     Property for general documentation purposes.|
|begin|     edm:begin|     LangMap|     This property denotes the start date of a period of time.|
|end|     edm:end|     LangMap|     This property denotes the end date of a period of time.|
|edmWasPresentAt|     edm:wasPresentAt|     Array (String)|     This property associates the people, things or information resources with an event at which they were present|
|edmHasMet|     edm:hasMet|     LangMap|     edm:hasMet relates a resource with the objects or phenomena that have happened to or have happened together with the resource under consideration. We can abstractly think of history and the present as a series of "meetings" between people and other things in space-time. Therefore we name this relationship as the things the object “has met” in the course of its existence.|
|edmIsRelatedTo|     edm:isRelatedTo|     LangMap|     edm:isRelatedTo is the most general contextual property in EDM. Contextual properties have typically to do either with the things that have happened to or together with the object under consideration, or what the object refers to by its shape, form or features in a figural or encoded form.|
|owlSameAs|     owl:sameAs|     Array (String)|     owl:sameAs links an individual to an individual. Such an owl:sameAs statement indicates that two URI references actually refer to the same thing: the individuals have the same "identity".|
|foafName|     foaf:name|     LangMap|     
|dcDate|     dc:date|     LangMap|     A point or period of time associated with an event in the lifecycle of the resource.|
|dcIdentifier|     dc:identifier|     LangMap|     An unambiguous reference to the resource within a given context.|
|rdaGr2DateOfBirth|     rdaGr2:dateOfBirth|     LangMap|     The year a person was born. Date of birth may also include the month and day of the person’s birth.|
|rdaGr2DateOfDeath|     rdaGr2:dateOfDeath|     LangMap|     The year a person died. Date of death may also include the month and day of the person’s death.|
|rdaGr2DateOfEstablishment|     rdaGr2:dateOfEstablishment|     LangMap|     The date on which a corporate body was established or founded.|
|rdaGr2DateOfTermination|     rdaGr2:dateOfTermination|     LangMap|     The date on which a corporate body was terminated or dissolved.|
|rdaGr2Gender|     rdaGr2:gender|     LangMap|     The gender with which a person identifies.|
|rdaGr2ProfessionOrOccupation|     rdaGr2:professionOrOccupation|     LangMap|     A profession or occupation in which a person works or has worked.|
|rdaGr2BiographicalInformation|     rdaGr2:biographicalInformation|     LangMap|     Information pertaining to the life or history of a person.|





### EDM Aggregation


EDM Aggregation. The set of resources related to a single cultural heritage object that collectively represent that object in Europeana. Such set consists of: all descriptions about the object that Europeana collects from (possibly different) content providers, including thumbnails and other forms of abstractions, as well as of the description of the object Europeana builds. Find more in the EDM Definition.

| Field | Qualified Name | Datatype | Description |
|:-------------|:-------------|:-----|
|about|     rdf:about|     String|     URI of the aggregation|
|edmDataProvider|     edm:dataProvider|     LangMap|     A name or identifier of organizations that contributed objects in this aggregation.|
|edmIsShownBy|     edm:isShownBy|     String|     An unambiguous URL reference to the digital object on the provider’s web site in the best available resolution/quality.|
|edmIsShownAt|     edm:isShownAt|     String|     An unambiguous URL reference to the digital object on the provider’s web site in its full information context.|
|edmObject|     edm:object|     String|     The URL of a thumbnail representing the digital object.|
|edmProvider|     edm:provider|     LangMap|     A name or identifier of organizations that delivered the objects in this aggregation.|
|edmRights|     edm:rights|     LangMap|     Information about copyright of the digital objects in this aggregation.|
|edmUgc|     edm:ugc|     String|     This element is used to identify user generated content (also called user created content). It should be applied to all digitised or born digital content contributed by the general public and collected by Europeana through a crowdsourcing initiative or project.|
|dcRights|     dc:rights|     LangMap|     Information about rights held in and over the resource.|
|hasView|     edm:hasView|     Array (String)|     This property relates a ORE aggregation about a CHO with a web resource providing a view of that CHO. Examples of view are: a thumbnail, a textual abstract and a table of contents.|
|aggregatedcHO|     edm:aggregatedcHO|     String|     The Europeana ID of the record corresponding to the CHO of this aggregation.|
|aggregates|     ore:aggregates|     Array (String)|     This is a container element which includes all relevant information that otherwise cannot be mapped to another element in the ESE.|
|edmUnstored|     edm:unstored|     Array (String)|     |
|webResources|     edm:WebResource|     Array ([WebResource](#WebResource))|     Information Resources that have at least one Web Representation and at least a URI.|



### EDM Concept 

SKOS* Concept. A SKOS concept can be viewed as an idea or notion; a unit of thought. All element of this class belong to the skos namespace.
* SKOS stands for Simple Knowledge Organization System, a W3C standard

| Field | Qualified Name | Datatype | Description |
|:-------------|:-------------|:-----|
|about|     rdf:about|     String|     Defines the resource being described|
|prefLabel|     skos:prefLabel|     LangMap|     Preferred lexical label.|
|altLabel|     skos:altLabel|     LangMap|     Alternative lexical label.|
|hiddenLabel|     skos:hiddenLabel|     LangMap|     A hidden lexical label, represented by means of the skos:hiddenLabel property, is a lexical label for a resource, where a KOS designer would like that character string to be accessible to applications performing text-based indexing and search operations, but would not like that label to be visible otherwise.|
|note|     skos:note|     LangMap|     Property for general documentation purposes.|
|broader|     skos:broader|     Array (String)|     Asserts a direct hierarchical link between two SKOS concepts. A triple A skos:broader B asserts that B, the object of the triple, is a broader concept than A, the subject of the triple.|
|narrower|     skos:narrower|     Array (String)|     Asserts a direct hierarchical link between two SKOS concepts. A triple C skos:narrower D asserts that D, the object of the triple, is a narrower concept than C, the subject of the triple.|
|related|     skos:related|     Array (String)|     Asserts an associative link between two SKOS concepts.|
|broadMatch|     skos:broadMatch|     Array (String)|     skos:broadMatch is used to state a hierarchical mapping link between two conceptual resources in different concept schemes.|
|narrowMatch|     skos:narrowMatch|     Array (String)|     skos:narrowMatch is used to state a hierarchical mapping link between two conceptual resources in different concept schemes.|
|exactMatch|     skos:exactMatch|     Array (String)|     skos:exactMatch is used to link two concepts, indicating a high degree of confidence that the concepts can be used interchangeably across a wide range of information retrieval applications. skos:exactMatch is a transitive property, and is a sub-property of skos:closeMatch.|
|relatedMatch|     skos:relatedMatch|     Array (String)|     skos:relatedMatch is used to state an associative mapping link between two conceptual resources in different concept schemes.|
|closeMatch|     skos:closeMatch|     Array (String)|     A skos:closeMatch assertion indicates that two concepts are sufficiently similar that they can be used interchangeably in applications that consider the two concept schemes they belong to. However, skos:closeMatch is not defined as transitive, which prevents such similarity assessments to propagate beyond these two schemes. If a concept ex1:A is a close match for another concept ex2:B which is itself a close match for ex3:C, it does not follow from the SKOS data model that ex1:A is a close match for ex3:C.|
|notation|     skos:skosnotation|     LangMap|     A notation is a string of characters such as "T58.5" or "303.4833" used to uniquely identify a concept within the scope of a given concept scheme.|
|inScheme|     skos:inScheme|     Array (String)|     Relates a resource (for example a concept) to a concept scheme in which it is included.|


### EDM EuropeanaAggregation 




EDM Europeana Aggregation. The set of resources related to a single cultural heritage object that collectively represent that object in Europeana. Such set consists of: all descriptions about the object that Europeana collects from (possibly different) content providers, including thumbnails and other forms of abstractions, as well as of the description of the object Europeana builds.

| Field | Qualified Name | Datatype | Description |
|:-------------|:-------------|:-----|
|about|     rdf:about|     String|     URI of the europeanaAggregation|
|webResources|     edm:WebResources|     Array ([WebResource](#WebResource))|     A collection of webResource objects|
|aggregatedcHO|     edm:aggregatedcHO|     String|     The ID of the record corresponding to the CHO of this aggregation|
|aggregates|     ore:aggregates|     Array (String)|     Aggregations, by definition, aggregate resources. The ore:aggregates relationship expresses that the object resource is a member of the set of aggregated resources of the subject (the Aggregation). This relationship between the Aggregation and its Aggregated Resources is thus more specific than a simple part/whole relationship, as expressed by dcterms:hasPart for example.|
|dcCreator|     dc:creator|     LangMap|     A creator definitions. This field has always the value Europeana |
|edmLandingPage|     edm:landingPage|     String|     This property captures the relation between an aggregation representing a cultural heritage object and the Web resource representing that object on the provider’s web site. |
|edmIsShownBy|     edm:isShownBy|     String|     An unambiguous URL reference to the digital object on the provider’s web site in the best available resolution/quality. |
|edmHasView|     edm:hasView|     Array (string)|     This property relates a ORE aggregation about a CHO with a web resource providing a view of that CHO. Examples of view are: a thumbnail, a textual abstract and a table of contents. |
|edmCountry|     edm:country|     LangMap|     This is the name of the country in which the Provider is based or “Europe” in the case of Europe-wide projects.|
|edmLanguage|     edm:language|     LangMap|     A language assigned to the resource with reference to the Provider.|
|edmRights|     edm:rights|     LangMap|     Information about copyright of the digital object as specified by isShownBy and isShownAt.|
|edmPreview|     edm:preview|     String|     |


### EDM Place

EDM Place. An "extent in space, in particular on the surface of the earth, in the pure sense of physics: independent from temporal phenomena and matter" (CIDOC CRM).

| Field | Qualified Name | Datatype | Description |
|:-------------|:-------------|:-----|
|about|     rdf:about|     String|     Defines the resource being described|
|prefLabel|     skos:prefLabel|     LangMap|     Preferred lexical label.|
|altLabel|     skos:altLabel|     LangMap|     Alternative lexical label.|
|hiddenLabel|     skos:hiddenLabel|     LangMap|     A hidden lexical label, represented by means of the skos:hiddenLabel property, is a lexical label for a resource, where a KOS designer would like that character string to be accessible to applications performing text-based indexing and search operations, but would not like that label to be visible otherwise.|
|note|     skos:note|     LangMap|     Property for general documentation purposes.|
|isPartOf|     dcterms:isPartOf|     LangMap|     A related resource in which the described resource is physically or logically included.|
|latitude|     wgs84:lat|     Number|     The latitude of the Place|
|longitude|     wgs84:long|     Number|     The longitude of the Place|
|altitude|     wgs84:alt|     Number|     The altitude of the Place|
|position|     wgs84:lat_long|     Object|     A comma-separated representation of a latitude, longitude coordinate.|
|dcTermsHasPart|     dcterms:hasPart|     LangMap|     A related resource that is included either physically or logically in the described resource.|
|owlSameAs|     owl:sameAs|     Array (String)|     owl:sameAs links an individual to an individual. Such an owl:sameAs statement indicates that two URI references actually refer to the same thing: the individuals have the same "identity".|



### EDM ProvidedcHO

EDM ProvidedcHO (Provided Cultural Heritage Object). This class comprises the Cultural Heritage objects that Europeana collects descriptions about.

| Field | Qualified Name | Datatype | Description |
|:-------------|:-------------|:-----|
|about|     rdf:about|     String|     Defines the resource being described |
|owlSameAs|     owl:sameAs|     Array (String)|     owl:sameAs links an individual to an individual. Such an owl:sameAs statement indicates that two URI references actually refer to the same thing: the individuals have the same "identity". |


### EDM Proxy 

ORE* Proxy. Europeana uses proxies as place-holders for cultural heritage objects within aggregations (whether Europeana aggregations or not) to the end of making assertions about the corresponding cultural heritage objects while distinguishing the provenance of these assertions. This class is used to create aliases of cultural heritage objects to which descriptions are attached. This allows Europeana to keep track of provenance of descriptions. See chapter 6.1 Introducing proxies in the EDM primer
* ORE stands for Open Archives Initiative Object Reuse and Exchange

| Field | Qualified Name | Datatype | Description |
|:-------------|:-------------|:-----|
|about|     rdf:about|     String|     Defines the resource being described |
|dcContributor|     dc:contributor|     LangMap|     An entity responsible for making contributions to the resource.|
|dcCoverage|     dc:coverage|     LangMap|     The spatial or temporal topic of the resource, the spatial applicability of the resource, or the jurisdiction under which the resource is relevant.|
|dcCreator|     dc:creator|     LangMap|     An entity primarily responsible for making the resource. This may be a person, organisation or a service.|
|dcDate|     dc:date|     LangMap|     A point or period of time associated with an event in the lifecycle of the resource.|
|dcDescription|     dc:description|     LangMap|     An account of the resource.|
|dcFormat|     dc:format|     LangMap|     The file format, physical medium or dimensions of the resource.|
|dcIdentifier|     dc:identifier|     LangMap|     An unambiguous reference to the resource within a given context.|
|dcLanguage|     dc:language|     LangMap|     A language of the resource |
|dcPublisher|     dc:publisher|     LangMap|     An entity responsible for making the resource available. Examples of a publisher include a person, an organisation and a service.|
|dcRelation|     dc:relation|     LangMap|     A related resource. The recommended best practice is to identify the resource using a formal identification scheme.|
|dcRights|     dc:rights|     LangMap|     Information about rights held in and over the resource.|
|dcSource|     dc:source|     LangMap|     A related resource from which the described resource is derived in whole or in part.|
|dcSubject|     dc:subject|     LangMap|     The topic of the resource.|
|dcTitle|     dc:title|     LangMap|     A name given to the resource. Typically, a Title will be a name by which the resource is formally known.|
|dcType|     dc:type|     LangMap|     The nature or genre of the resource. Type includes terms describing general categories, functions, genres, or aggregation levels for content.|
|dctermsAlternative|     dcterms:alternative|     LangMap|     An alternative name for the resource. This can be any form of the title that is used as a substitute or an alternative to the formal title of the resource including abbreviations or translations of the title.|
|dctermsConformsTo|     dcterms:conformsTo|     LangMap|     An established standard to which the described resource conforms.|
|dctermsCreated|     dcterms:created|     LangMap|     Date of creation of the resource.|
|dctermsExtent|     dcterms:extent|     LangMap|     The size or duration of the resource.|
|dctermsHasFormat|     dcterms:hasFormat|     LangMap|     A related resource that is substantially the same as the pre-existing described resource, but in another format.|
|dctermsHasPart|     dcterms:hasPart|     LangMap|     A related resource that is included either physically or logically in the described resource.|
|dctermsHasVersion|     dcterms:hasVersion|     LangMap|     A related resource that is a version, edition, or adaptation of the described resource. Changes in version imply substantive changes in content rather than differences in format.|
|dctermsIsFormatOf|     dcterms:isFormatOf|     LangMap|     A related resource that is substantially the same as the described resource, but in another format.|
|dctermsIsPartOf|     dcterms:isPartOf|     LangMap|     A related resource in which the described resource is physically or logically included.|
|dctermsIsReferencedBy|     dcterms:isReferencedBy|     LangMap|     A related resource that references, cites, or otherwise points to the described resource.|
|dctermsIsReplacedBy|     dcterms:isReplacedBy|     LangMap|     A related resource that supplants, displaces, or supersedes the described resource.|
|dctermsIsRequiredBy|     dcterms:isRequiredBy|     LangMap|     A related resource that requires the described resource to support its function, delivery or coherence.|
|dctermsIssued|     dcterms:issued|     LangMap|     Date of formal issuance (e.g., publication) of the resource.|
|dctermsIsVersionOf|     dcterms:isVersionOf|     LangMap|     A related resource of which the described resource is a version, edition, or adaptation. Changes in version imply substantive changes in content rather than differences in format.|
|dctermsMedium|     dcterms:medium|     LangMap|     The material or physical carrier of the resource.|
|dctermsProvenance|     dcterms:provenance|     LangMap|     A statement of any changes in ownership and custody of the resource since its creation that are significant for its authenticity, integrity and interpretation. This may include a description of any changes successive custodians made to the resource.|
|dctermsReferences|     dcterms:references|     LangMap|     A related resource that is referenced, cited, or otherwise pointed to by the described resource.|
|dctermsReplaces|     dcterms:replaces|     LangMap|     A related resource that is supplanted, displaced, or superseded by the described resource.|
|dctermsRequires|     dcterms:requires|     LangMap|     A related resource that is required by the described resource to support its function, delivery or coherence.|
|dctermsSpatial|     dcterms:spatial|     LangMap|     Spatial characteristics of the resource.|
|dctermsTOC|     dcterms:tableOfContents|     LangMap|     Table Of Contents. A list of subunits of the resource.|
|dctermsTemporal|     dcterms:temporal|     LangMap|     Temporal characteristics of the resource.|
|edmCurrentLocation|     edm:currentLocation|     String|     The geographic location and/or name of the repository, building, site, or other entity whose boundaries presently include the resource.
|edmHasMet|     edm:hasMet|     LangMap|     edm:hasMet relates a resource with the objects or phenomena that have happened to or have happened together with the resource under consideration. We can abstractly think of history and the present as a series of “meetings” between people and other things in space-time. Therefore we name this relationship as the things the object “has met” in the course of its existence. These meetings are events in the proper sense, in which other people and things participate in any role.|
|edmHasType|     edm:hasType|     LangMap|     This property relates a resource with the concepts it belongs to in a suitable type system such as MIME or any thesaurus that captures categories of objects in a given field (e.g., the “Objects” facet in Getty’s Art and Architecture Thesaurus). It does not capture aboutness.|
|edmIncorporates|     edm:incorporates|     Array (String)|     This property captures the use of some resource to add value to another resource. Such resources may be nested, such as performing a theater play text, and then recording the performance, or creating an artful edition of a collection of poems or just aggregating various poems in an anthology.|
|edmIsDerivativeOf|     edm:isDerivativeOf|     Array (String)|     This property captures a narrower notion of derivation than edm:isSimilarTo, in the sense that it relates a resource to another one, obtained by reworking, reducing, expanding, parts or the whole contents of the former, and possibly adding some minor parts.|
|edmIsNextInSequence|     edm:isNextInSequence|     String|     edm:isNextInSequence relates two resources S and R that are ordered parts of the same resource A, and such that S comes immediately after R in the order created by their being parts of A. |
|edmIsRelatedTo|     edm:isRelatedTo|     LangMap|     edm:isRelatedTo is the most general contextual property in EDM. Contextual properties have typically to do either with the things that have happened to or together with the object under consideration, or what the object refers to by its shape, form or features in a figural or encoded form.|
|edmIsRepresentationOf|     edm:isRepresentationOf|     String|     This property associates a resource to another resource that it represents.|
|edmIsSimilarTo|     edm:isSimilarTo|     Array (String)|     The most generic derivation property, covering also the case of questionable derivation. Is Similar To asserts that parts of the contents of one resource exhibit common features with respect to ideas, shapes, structures, colors, words, plots, topics with the contents of the related resource.|
|edmIsSuccessorOf|     edm:isSuccessorOf|     Array (String)|     This property captures the relation between the continuation of a resource and that resource. This applies to a story, a serial, a journal etc. No content of the successor resource is identical or has a similar form with that of the precursor. The similarity is only in the context, subjects and figures of a plot. Successors typically form part of a common whole – such as a trilogy, a journal, etc. |
|edmRealizes|     edm:realizes|     Array (String)|     This property describes a relation between a physical thing and the information resource that is contained in it, visible at it or otherwise carried by it, if applicable. |
|edmType|     edm:type|     String|     The Europeana material type of the resource. All digital objects in Europeana have to be classified as one of the five Europeana material types using upper case letters: TEXT, IMAGE, SOUND, VIDEO or 3D. |
|edmRights|     edm:rights|     LangMap|     Information about copyright of the digital object as specified by isShownBy and isShownAt.|
|edmWasPresentAt|     edm:wasPresentAt|     Array (String)|     This property associates the people, things or information resources with an event at which they were present.|
|europeanaProxy|     |     Boolean|     Flag whether the proxy is an Europeana proxy. See chapter 6.2 Europeana proxies and data enrichment in the EDM primer|
|proxyFor|     ore:proxyFor|     String|     Proxy objects are used to represent a resource as it is aggregated in a particular aggregation. The ore:proxyFor relationship is used to link the proxy to the aggregated resource it is a proxy for. The subject of the relationship is a proxy object, and the object of the relationship is the aggregated resource.|
|proxyIn|     ore:proxyIn|     Array (String)|     Proxy objects must also link to the aggregation in which the resource being proxied is aggregated. The ore:proxyIn relationship is used for this purpose. The subject of the relationship is a proxy object, and the object of the relationship is the aggregation.|


### EDM Timespan 


| Field | Qualified Name | Datatype | Description |
|:-------------|:-------------|:-----|
|about|     rdf:about|     String|     Defines the resource being described|
|prefLabel|     skos:prefLabel|     LangMap|     Preferred lexical label.|
|altLabel|     skos:altLabel|     LangMap|     Alternative lexical label.|
|hiddenLabel|     skos:hiddenLabel|     LangMap|     A hidden lexical label, represented by means of the skos:hiddenLabel property, is a lexical label for a resource, where a KOS designer would like that character string to be accessible to applications performing text-based indexing and search operations, but would not like that label to be visible otherwise.|
|note|     skos:note|     LangMap|     Property for general documentation purposes.|
|begin|     edm:begin|     LangMap|     This property denotes the start date of a period of time.|
|end|     edm:end|     LangMap|     This property denotes the end date of a period of time.|
|isPartOf|     dcterms:isPartOf|     LangMap|     A related resource in which the described resource is physically or logically included.|
|dctermsHasPart|     dcterms:hasPart|     LangMap|     A related resource that is included either physically or logically in the described resource.|
|owlSameAs|     owl:sameAs|     Array (String)|     owl:sameAs links an individual to an individual. Such an owl:sameAs statement indicates that two URI references actually refer to the same thing: the individuals have the same "identity".|


### EDM WebResource

| Field | Qualified Name | Datatype | Description |
|:-------------|:-------------|:-----|
|about|     rdf:about|     String|     URI of the webResource |
|webResourceDcRights|     dc:rights|     LangMap|     Free text information about the rights in this object |
|webResourceEdmRights|     edm:rights|     LangMap|     URI of the licence applied to the WebResource |
|dcDescription|     dc:description|     LangMap|     An account of the resource. |
|dcFormat|     dc:format|     LangMap|     The file format, physical medium or dimensions of the resource. |
|dcSource|     dc:source|     LangMap|     A related resource from which the described resource is derived in whole or in part. |
|dctermsExtent|     dcterms:extent|     LangMap|     The size or duration of the resource.|
|dctermsIssued|     dcterms:issued|     LangMap|     Date of formal issuance (e.g., publication) of the resource.|
|dctermsConformsTo|     dcterms:conformsTo|     LangMap|     An established standard to which the described resource conforms.|
|dctermsCreated|     dcterms:created|     LangMap|     Date of creation of the resource.|
|dctermsIsFormatOf|     dcterms:isFormatOf|     LangMap|     A related resource that is substantially the same as the described resource, but in another format.|
|dctermsHasPart|     dcterms:hasPart|     LangMap|     A related resource that is included either physically or logically in the described resource.|
|isNextInSequence|     edm:isNextInSequence|     String|     edm:isNextInSequence relates two resources S and R that are ordered parts of the same resource A, and such that S comes immediately after R in the order created by their being parts of A.|