---
layout: "api-page2"
title: API1-API2 field mapping
published: true
---

* TOC
{:toc}

Some fields available in API1 were renamed in API2. In the table below you can find the mapping between the old and the new field names. Old field names are still supported but we encourage using new names because the backward compatibility with API1 fields will be stopped at some point.

| API1 field | API2 field | 
|:-------------|:-------------|
|europeana_uri|europeana_id|
|europeana_collectionName|europeana_collectionName|
|europeana_type|proxy_edm_type|
|europeana_object|provider_aggregation_edm_object|
|europeana_isShownAt|provider_aggregation_edm_isShownAt|
|europeana_isShownBy|provider_aggregation_edm_isShownBy|
|europeana_provider|provider_aggregation_edm_provider|
|europeana_dataProvider|provider_aggregation_edm_dataProvider|
|europeana_rights|provider_aggregation_edm_rights|
|europeana_UGC|edm_UGC|
|europeana_completeness|europeana_completeness|
|europeana_previewNoDistribute|europeana_previewNoDistribute|
|dc_coverage|proxy_dc_coverage|
|dc_contributor|proxy_dc_contributor|
|dc_description|proxy_dc_description|
|dc_creator|proxy_dc_creator|
|dc_date|proxy_dc_date|
|dc_format|proxy_dc_format|
|dc_identifier|proxy_dc_identifier|
|dc_language|proxy_dc_language|
|dc_publisher|proxy_dc_publisher|
|dc_relation|proxy_dc_relation|
|dc_rights|proxy_dc_rights|
|dc_source|proxy_dc_source|
|dc_subject|proxy_dc_subject|
|dc_title|proxy_dc_title|
|dc_type|proxy_dc_type|
|dcterms_alternative|proxy_dcterms_alternative|
|dcterms_created|proxy_dcterms_created|
|dcterms_conformsTo|proxy_dcterms_conformsTo|
|dcterms_extent|proxy_dcterms_extent|
|dcterms_hasFormat|proxy_dcterms_hasFormat|
|dcterms_hasVersion|proxy_dcterms_hasVersion|
|dcterms_isFormatOf|proxy_dcterms_isFormatOf|
|dcterms_isPartOf|proxy_dcterms_isPartOf|
|dcterms_isReferencedBy|proxy_dcterms_isReferencedBy|
|dcterms_isReplacedBy|proxy_dcterms_isReplacedBy|
|dcterms_isRequiredBy|proxy_dcterms_isRequiredBy|
|dcterms_issued|proxy_dcterms_issued|
|dcterms_isVersionOf|proxy_dcterms_isVersionOf|
|dcterms_medium|proxy_dcterms_medium|
|dcterms_provenance|proxy_dcterms_provenance|
|dcterms_references|proxy_dcterms_references|
|dcterms_replaces|proxy_dcterms_replaces|
|dcterms_requires|proxy_dcterms_requires|
|dcterms_spatial|proxy_dcterms_spatial|
|dcterms_tableOfContents|proxy_dcterms_tableOfContents|
|dcterms_temporal|proxy_dcterms_temporal|
|skos_prefLabel|cc_skos_prefLabel|
|skos_altLabel|cc_skos_altLabel|
|skos_broader|cc_skos_broader|
|period_begin|ts_edm_begin|
|period_end|ts_edm_end|
|wgs_lat|pl_wgs84_pos_lat|
|wgs_lon|pl_wgs84_pos_long|
|enrichment_place_term|edm_place|
|enrichment_place_label|pl_skos_prefLabel|
|enrichment_place_latitude|pl_wgs84_pos_lat|
|enrichment_place_longitude|pl_wgs84_pos_long|
|enrichment_period_term|edm_timespan|
|enrichment_period_label|ts_skos_prefLabel|
|enrichment_period_begin|ts_edm_begin|
|enrichment_period_end|ts_edm_end|
|enrichment_concept_term|skos_concept|
|enrichment_concept_label|cc_skos_prefLabel|
|enrichment_agent_term|edm_agent|
|enrichment_agent_label|ag_skos_prefLabel|
|enrichment_place_broader_term|pl_dcterms_isPartOf|
|enrichment_place_broader_label|pl_dcterms_isPartOf_label|
|enrichment_period_broader_term|ts_dcterms_isPartOf|
|enrichment_period_broader_label|ts_dcterms_isPartOf_label|
|enrichment_concept_broader_term|cc_skos_broader|
|enrichment_concept_broader_label|cc_skos_broaderLabel|
|europeana_year|proxy_edm_year|
|europeana_language|europeana_aggregation_edm_language|
|europeana_country|europeana_aggregation_edm_country|
|dcterms_hasPart|proxy_dcterms_hasPart|
