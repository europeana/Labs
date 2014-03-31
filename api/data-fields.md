---
layout: "api-page"
title: API Data Fields
published: true
---

* TOC
{:toc}

Each Europeana field has different names in different contexts. We have a theoretical and RDF context, where we returns qualified names such as dc:title. In search the same field becomes proxy_dc_title, in search result it is simply title, and in object display it is the Proxy object's dcTitle field. Some fields as part of aggregated fields, and facets. These are special fields which cover the content of multiple fields to provide a common entry point for similar fields.

Meaning of columns
* EDM Field: The field's name in the Europeana metadata scheme
* Name in search: The name we should use in search queries
* Datatype: The fields data type in searching
* Name in search result: The field's name in search call response
* Name (record): The field's name in the object call response
* Aggregated Field/Facet: The name of aggregated fields and facets which cover this field.


| EDM Field | Name in search | Datatype | Name in search result | Name (record) | Aggregated Field/Facet |
|:-------------|:-------------|:-----|:-----|:-----|:-----|
| edm:ProvidedCHO | | | | | |
|@rdf:about   |   edm_europeana_proxy   |   string   |      |   Proxy.about   |   
|dc:contributor   |   proxy_dc_contributor   |   string   |   dcContributor   |   Proxy.dcContributor   |   who
|dc:coverage   |   proxy_dc_coverage   |   string   |      |   Proxy.dcCoverage   |   when, where, subject
|dc:creator   |   proxy_dc_creator   |   string   |   dcCreator   |   Proxy.dcCreator   |   who
|dc:date   |   proxy_dc_date   |   string   |      |   Proxy.dcDate   |   when
|dc:description   |   proxy_dc_description   |   string   |      |   Proxy.dcDescription   |   description
|dc:format   |   proxy_dc_format   |   string   |      |   Proxy.dcFormat   |   what
|dc:identifier   |   proxy_dc_identifier   |   string   |      |   Proxy.dcIdentifier   |   identifier
|dc:language   |   proxy_dc_language   |   string   |      |   Proxy.dcLanguage   |   
|dc:publisher   |   proxy_dc_publisher   |   string   |      |   Proxy.dcPublisher   |   
|dc:relation   |   proxy_dc_relation   |   string   |      |   Proxy.dcRelation   |   
|dc:rights   |   proxy_dc_rights   |   string   |      |   Proxy.dcRights   |   
|dc:source   |   proxy_dc_source   |   string   |      |   Proxy.dcDource   |   
|dc:subject   |   proxy_dc_subject   |   string   |      |   Proxy.dcSubject   |   
|dc:title   |   proxy_dc_title   |   string   |   title   |   Proxy.dcTitle   |   title
|dc:type   |   proxy_dc_type   |   string   |      |   Proxy.dcType   |   what
|dcterms:alternative   |   proxy_dcterms_alternative   |   text   |      |   Proxy.dctermsAlternative   |   title
|dcterms:conformsTo   |   proxy_dcterms_conformsTo   |   string   |      |   Proxy.dctermsConformsTo   |   
|dcterms:created   |   proxy_dcterms_created   |   string   |      |   Proxy.dctermsCreated   |   when, date
|dcterms:extent   |   proxy_dcterms_extent   |   string   |      |   Proxy.dctermsExtent   |   
|dcterms:hasFormat   |   proxy_dcterms_hasFormat   |   string   |      |   Proxy.dctermsHasFormat   |   
|dcterms:hasPart   |   proxy_dcterms_hasPart   |   string   |   dctermsHasPart   |   Proxy.dctermsHasPart   |   
|dcterms:hasVersion   |   proxy_dcterms_hasVersion   |   string   |      |   Proxy.dctermsHasVersion   |   
|dcterms:isFormatOf   |   proxy_dcterms_isFormatOf   |   string   |      |   Proxy.dctermsIsFormatOf   |   
|dcterms:isPartOf   |   proxy_dcterms_isPartOf   |   string   |      |   Proxy.dctermsIsPartOf   |   
|dcterms:isReferencedBy   |   proxy_dcterms_isReferencedBy   |   string   |      |   Proxy.dctermsIsReferencedBy   |   
|dcterms:isReplacedBy   |   proxy_dcterms_isReplacedBy   |   string   |      |   Proxy.dctermsIsReplacedBy   |   
|dcterms:isRequiredBy   |   proxy_dcterms_isRequiredBy   |   string   |      |   Proxy.dctermsIsRequiredBy   |   
|dcterms:issued   |   proxy_dcterms_issued   |   string   |      |   Proxy.dctermsIssued   |   
|dcterms:isVersionOf   |   proxy_dcterms_isVersionOf   |   string   |      |   Proxy.dctermsIsVersionOf   |   
|dcterms:medium   |   proxy_dcterms_medium   |   string   |      |   Proxy.dctermsMedium   |   
|dcterms:provenance   |   proxy_dcterms_provenance   |   string   |      |   Proxy.dctermsProvenance   |   
|dcterms:references   |   proxy_dcterms_references   |   string   |      |   Proxy.dctermsReferences   |   
|dcterms:replaces   |   proxy_dcterms_replaces   |   string   |      |   Proxy.dctermsReplaces   |   
|dcterms:requires   |   proxy_dcterms_requires   |   string   |      |   Proxy.dctermsRequires   |   
|dcterms:spatial   |   proxy_dcterms_spatial   |   string   |   dctermsSpatial   |   Proxy.dctermsSpatial   |   where, location, subject
|dcterms:tableOfContents   |   proxy_dcterms_tableOfContents   |   string   |      |   Proxy.dctermsTOC   |   description
|dcterms:temporal   |   proxy_dcterms_temporal   |   string   |      |   Proxy.dctermsTemporal   |   when, subject
|edm:currentLocation   |   proxy_edm_currentLocation   |   string   |      |   Proxy.edmCurrentLocation   |   
|proxy_edm_currentLocation_lat   |   float   |      |      |   
|proxy_edm_currentLocation_lon   |   float   |      |      |   
|edm:hasMet   |   proxy_edm_hasMet   |   string   |      |   Proxy.edmHasMet   |   
|edm:hasType   |   proxy_edm_hasType   |   string   |      |   Proxy.edmHasType   |   
|edm:incorporates   |   proxy_edm_incorporates   |   string   |      |   Proxy.edmIncorporates   |   
|edm:isDerivativeOf   |   proxy_edm_isDerivativeOf   |   string   |      |   Proxy.edmIsDerivativeOf   |   
|edm:isNextInSequence   |   proxy_edm_isNextInSequence   |   string   |      |   Proxy.edmIsNextInSequence   |   
|edm:isRelatedTo   |   proxy_edm_isRelatedTo   |   string   |      |   Proxy.edmIsRelatedTo   |   
|edm:isRepresentationOf   |   proxy_edm_isRepresentationOf   |   string   |      |   Proxy.edmIsRepresentationOf   |   
|edm:isSimilarTo   |   proxy_edm_isSimilarTo   |   string   |      |   Proxy.edmIsSimilarTo   |   
|edm:isSuccessorOf   |   proxy_edm_isSuccessorOf   |   string   |      |   Proxy.edmIsSuccessorOf   |   
|edm:realizes   |   proxy_edm_realizes   |   string   |      |   Proxy.edmRealizes   |   
|edm:type   |   proxy_edm_type   |   string   |      |   Proxy.edmType   |   
|edm:unstored   |   proxy_edm_unstored   |   string   |      |   Proxy.edmUnstored   |   
|edm:wasPresentAt   |   proxy_edm_wasPresentAt   |   string   |      |      |   
|owl:sameAs   |   proxy_owl_sameAs   |   string   |      |      |   
|rdf:type   |      |      |      |      |   
|edm:rights   |   proxy_edm_rights   |   string   |      |   Proxy.edmRights   |   
|proxy_edm_userTags   |   string   |      |   Proxy.edmWasPresentAt   |   
|proxy_edm_year   |   string   |      |      |   YEAR
|proxy_ore_proxy   |   string   |      |   Proxy.europeanaProxy   |   
|ore:proxyFor   |   proxy_ore_proxyFor   |   string   |      |   Proxy.proxyFor   |   
|ore:proxyIn   |   proxy_ore_proxyIn   |   string   |      |   Proxy.proxyIn   |   
|ore:Aggregation
|@rdf:about   |   provider_aggregation_ore_aggregation (?)   |   string   |      |   Aggregation.about   |   
|ore:aggregates   |   provider_aggregation_ore_aggregates   |   string   |      |   Aggregation.aggregates   |   
|edm:aggregatedCHO   |   provider_aggregation_edm_aggregatedCHO   |   string   |      |   Aggregation.aggregatedCHO   |   
|edm:dataProvider   |   provider_aggregation_edm_dataProvider   |   string   |   edmDataProvider   |   Aggregation.edmDataProvider   |   DATA_PROVIDER
|edm:hasView   |   provider_aggregation_edm_hasView   |   string   |      |   Aggregation.hasView   |   
|edm:isShownAt   |   provider_aggregation_edm_isShownAt   |   string   |      |   Aggregation.edmIsShownAt   |   
|edm:isShownBy   |   provider_aggregation_edm_isShownBy   |   string   |      |   Aggregation.edmIsShownBy   |   
|edm:object   |   provider_aggregation_edm_object   |   string   |   edmObject   |   Aggregation.edmObject   |   
|edm:provider   |   provider_aggregation_edm_provider   |   string   |   provider   |   Aggregation.edmProvider   |   PROVIDER
|dc:rights   |   provider_aggregation_dc_rights   |   string   |      |   Aggregation.dcRights   |   
|edm:rights   |   provider_aggregation_edm_rights   |   string   |      |   Aggregation.edmRights   |   RIGHTS
|edm:ugc   |   edm_UGC   |   boolean   |   ugc   |   Aggregation.edmUgc   |   UGC
|provider_aggregation_edm_unstored   |   string   |      |   Aggregation.edmUnstored   |   
|edm_previewNoDistribute   |   boolean   |      |   Aggregation.edmPreviewNoDistribute   |   
|edm:EuropeanaAggregation
|@rdf:about   |   edm_europeana_aggregation   |   string   |      |   EuropeanaAggregation.about   |   
|dc:creator   |   europeana_aggregation_dc_creator   |   string   |      |   EuropeanaAggregation.dcCreator   |   
|edm:country   |   europeana_aggregation_edm_country   |   string   |   country   |   EuropeanaAggregation.edmCountry   |   COUNTRY
|edm:hasView   |   europeana_aggregation_edm_hasView   |   string   |      |   EuropeanaAggregation.edmHasView   |   
|edm:isShownBy   |   europeana_aggregation_edm_isShownBy   |   string   |      |   EuropeanaAggregation.edmIsShownBy   |   
|edm:landingPage   |   europeana_aggregation_edm_landingPage   |   string   |      |   EuropeanaAggregation.edmLandingPage   |   
|edm:language   |   europeana_aggregation_edm_language   |   string   |      |   EuropeanaAggregation.edmLanguage   |   LANGUAGE
|edm:rights   |   europeana_aggregation_edm_rights   |   string   |      |   EuropeanaAggregation.edmRights   |   
|edm:aggregatedCHO   |   europeana_aggregation_ore_aggregatedCHO   |   string   |      |   EuropeanaAggregation.aggregatedCHO   |   
|ore:aggregates   |   europeana_aggregation_ore_aggregates   |   string   |      |   EuropeanaAggregation.aggregates   |   
|edm:WebResource
|@rdf:about   |   edm_webResource (?)   |   string   |      |   WebResource.about   |   
|dc:description   |   wr_dc_description   |   string   |      |   WebResource.dcDescription   |   
|dc:format   |   wr_dc_format   |   string   |      |   WebResource.dcFormat   |   
|dc:rights   |   wr_dc_rights   |   string   |      |   WebResource.webResourceDcRights   |   
|dc:source   |   wr_dc_source   |   string   |      |   WebResource.dcSource   |   
|dcterms:conformsTo   |   wr_dcterms_conformsTo   |   string   |      |   WebResource.dctermsConformsTo   |   
|dcterms:created   |   wr_dcterms_created   |   string   |      |   WebResource.dctermsCreated   |   
|dcterms:extent   |   wr_dcterms_extent   |   string   |      |   WebResource.dctermsExtent   |   
|dcterms:hasPart   |   wr_dcterms_hasPart   |   string   |      |   WebResource.dctermsHasPart   |   
|dcterms:isFormatOf   |   wr_dcterms_isFormatOf   |   string   |      |   WebResource.dctermsIsFormatOf   |   
|dcterms:issued   |   wr_dcterms_issued   |   string   |      |   WebResource.dctermsIssued   |   
|edm:isNextInSequence   |   wr_edm_isNextInSequence   |   string   |      |   WebResource.isNextInSequence   |   
|edm:rights   |   wr_edm_rights   |   string   |      |   WebResource.webResourceEdmRights   |   
|edm:Agent
|@rdf:about   |   edm_agent (?)   |   string   |   edmAgent   |   Agent.about   |   
|skos:prefLabel   |   ag_skos_prefLabel   |   text   |   edmAgentLabel   |   Agent.prefLabel   |   who
|skos:altLabel   |   ag_skos_altLabel   |   text   |      |   Agent.altLabel   |   
|skos:hiddenLabel   |   ag_skos_hiddenLabel   |   text   |      |      |   
|skos:note   |   ag_skos_note   |   string   |      |   Agent.note   |   
|dc:date   |   ag_dc_date   |   string   |      |   Agent.dcDate   |   
|dc:identifier   |   ag_dc_identifier   |   string   |      |   Agent.dcIdentifier   |   
|edm:begin   |   ag_edm_begin   |   string   |      |   Agent.begin   |   
|edm:end   |   ag_edm_end   |   string   |      |   Agent.end   |   
|edm:hasMet   |   ag_edm_hasMet   |   string   |      |   Agent.edmHasMet   |   
|edm:isRelatedTo   |   ag_edm_isRelatedTo   |   string   |      |   Agent.edmIsRelatedTo   |   
|edm:wasPresentAt   |   ag_edm_wasPresentAt   |   string   |      |   Agent.edmWasPresentAt   |   
|foaf:name   |   ag_foaf_name   |   string   |      |   Agent.foafName   |   
|rdaGr2:biographicalInformation   |   ag_rdagr2_biographicalInformation   |   string   |      |   Agent.rdaGr2BiographicalInformation   |   
|rdaGr2:dateOfBirth   |   ag_rdagr2_dateOfBirth   |   string   |      |   Agent.rdaGr2DateOfBirth   |   
|rdaGr2:dateOfDeath   |   ag_rdagr2_dateOfDeath   |   string   |      |   Agent.rdaGr2DateOfDeath   |   
|rdaGr2:dateOfEstablishment   |   ag_rdagr2_dateOfEstablishment   |   string   |      |   Agent.rdaGr2DateOfEstablishment   |   
|rdaGr2:dateOfTermination   |   ag_rdagr2_dateOfTermination   |   string   |      |   Agent.rdaGr2DateOfTermination   |   
|rdaGr2:gender   |   ag_rdagr2_gender   |   string   |      |   Agent.rdaGr2Gender   |   
|rdaGr2:professionOrOccupation   |   ag_rdagr2_professionOrOccupation   |   string   |      |   Agent.rdaGr2ProfessionOrOccupation   |   
|owl:sameAs   |   ag_owl_sameAs   |   string   |      |   Agent.owlSameAs   |   
|edm:Place
|@rdf:about   |   edm_place (?)   |   string   |   edmPlace   |   Place.about   |   
|wgs84_pos:lat   |   pl_wgs84_pos_lat   |   string   |   edmPlaceLatitude   |   Place.latitude   |   
|wgs84_pos:long   |   pl_wgs84_pos_long   |   string   |   edmPlaceLongitude   |   Place.longitude   |   
|wgs84_pos:alt   |   pl_wgs84_pos_alt   |   string   |      |   Place.altitude   |   
|wgs84_pos:lat_long   |   pl_wgs84_pos_lat_long   |   string   |      |      |   
|skos:prefLabel   |   pl_skos_prefLabel   |   text   |   edmPlaceLabel   |   Place.prefLabel   |   where
|skos:altLabel   |   pl_skos_altLabel   |   text   |      |   Place.altLabel   |   
|skos:hiddenLabel   |   pl_skos_hiddenLabel   |   string   |      |      |   
|skos:note   |   pl_skos_note   |   string   |      |   Place.note   |   
|dcterms:hasPart   |   pl_dcterms_hasPart   |   string   |      |   Place.dcTermsHasPart   |   
|dcterms:isPartOf   |   pl_dcterms_isPartOf   |   string   |   edmPlaceBroaderTerm, dctermsIsPartOf   |   Place.isPartOf   |   
|owl:sameAs   |   pl_owl_sameAs   |   string   |      |   Place.owlSameAs   |   
|pl_dcterms_isPartOf_label   |   string   |      |      |   
|edm:TimeSpan
|@rdf:about   |   edm_timespan (?)   |   text   |   edmTimespan   |   TimeSpan.about   |   
|skos:prefLabel   |   ts_skos_prefLabel   |   text   |   edmTimespanLabel   |   TimeSpan.prefLabel   |   when
|skos:altLabel   |   ts_skos_altLabel   |   text   |      |   TimeSpan.altLabel   |   
|skos:hiddenLabel   |   ts_skos_hiddenLabel   |   string   |      |      |   
|skos:note   |   ts_skos_note   |   string   |      |   TimeSpan.note   |   
|dcterms:hasPart   |   ts_dcterms_hasPart   |   string   |      |   TimeSpan.dcTermsHasPart   |   
|dcterms:isPartOf   |   ts_dcterms_isPartOf   |   string   |   edmTimespanBroaderTerm   |   TimeSpan.isPartOf   |   
|ts_dcterms_isPartOf   |   string   |   edmTimespanBroaderLabel   |      |   
|edm:begin   |   ts_edm_begin   |   string   |   edmTimespanBegin   |   TimeSpan.begin   |   
|edm:end   |   ts_edm_end   |   string   |   edmTimespanEnd   |   TimeSpan.end   |   
|crm:P79F.beginning_is_qualified_by   |      |      |      |   TimeSpan.crmP79FBeginningIsQualifiedBy   |   
|crm:P80F.end_is_qualified_by   |      |      |      |   TimeSpan.crmP80FEndIsQualifiedBy   |   
|owl:sameAs   |   ts_owl_sameAs   |   string   |      |   TimeSpan.owlSameAs   |   
|ts_dcterms_isPartOf_label (?)   |   string   |      |      |   
|skos:Concept
|@rdf:about   |   skos_concept (?)   |   string   |   edmConceptTerm   |   Concept.about   |   
|skos:prefLabel   |   cc_skos_prefLabel   |   text   |   edmConceptPrefLabel   |   Concept.prefLabel   |   what
|skos:altLabel   |   cc_skos_altLabel   |   text   |      |   Concept.altLabel   |   
|skos:hiddenLabel   |   cc_skos_hiddenLabel   |   string   |      |      |   
|skos:broader   |   cc_skos_broader   |   string   |   edmConceptBroaderTerm   |   Concept.broader   |   
|cc_skos_broaderLabel   |   string   |   edmConceptBroaderLabel   |      |   what
|skos:narrower   |   cc_skos_narrower   |   string   |      |   Concept.narrower   |   
|skos:related   |   cc_skos_related   |   string   |      |   Concept.related   |   
|skos:broadMatch   |   cc_skos_broadMatch   |   string   |      |   Concept.broadMatch   |   
|skos:narrowMatch   |   cc_skos_narrowMatch   |   string   |      |   Concept.narrowMatch   |   
|skos:relatedMatch   |   cc_skos_relatedMatch   |   string   |      |   Concept.relatedMatch   |   
|skos:exactMatch   |   cc_skos_exactMatch   |   string   |      |   Concept.exactMatch   |   
|skos:closeMatch   |   cc_skos_closeMatch   |   string   |      |   Concept.closeMatch   |   
|skos:note   |   cc_skos_note   |   string   |      |   Concept.note   |   
|skos:notation   |   cc_skos_notation   |   string   |      |   Concept.notation   |   
|skos:inScheme   |   cc_skos_inScheme   |   string   |      |   Concept.inScheme   |   
|Fields outside of EDM schema:
|europeana_completeness   |   integer   |   europeanaCompleteness, completeness   |      |   COMPLETENESS
|europeana_previewNoDistribute   |   boolean   |      |      |   
|timestamp   |   date   |      |      |   
|europeana_id   |   string   |   id   |      |   
|identifier   |   string   |      |      |   
|europeana_collectionName   |   string   |   europeanaCollectionName   |      |   
|Aggregated field
|country   |   text   |      |      |   
|date   |   text   |      |      |   
|description   |   text   |      |      |   
|format   |   text   |      |      |   
|language   |   text   |      |      |   
|location   |   text   |      |      |   
|publisher   |   text   |      |      |   
|relation   |   text   |      |      |   
|rights   |   text   |      |      |   
|source   |   text   |      |      |   
|subject   |   text   |      |      |   
|text   |   text   |      |      |   
|title   |   text   |      |      |   
|what   |   text   |      |      |   
|when   |   text   |      |      |   
|where   |   text   |      |      |   
|who   |   text   |      |      |   
|Facets
|COMPLETENESS   |   string   |      |      |   
|CONTRIBUTOR   |   string   |      |      |   
|COUNTRY   |   string   |      |      |   
|DATA_PROVIDER   |   string   |      |      |   
|LANGUAGE   |   string   |      |      |   
|LOCATION   |   string   |      |      |   
|PROVIDER   |   string   |      |      |   
|RIGHTS   |   string   |      |      |   
|SUBJECT   |   string   |      |      |   
|TYPE   |   string   |      |      |   
|UGC   |   string   |      |      |   
|USERTAGS   |   string   |      |      |   
|YEAR   |   string   |   

