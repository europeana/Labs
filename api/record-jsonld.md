---
layout: "api-page"
title: Record in JSON-LD
published: true
excerpt: Retrieving a single record from the dataset in JSON-LD format
---

## JSON-LD

JSON-LD is stands for JSON for Linking Data, and is lightweight Linked Data format.

The basic structure of the JSON-LD response is similar to a normal [single Record JSON request](/api/record/):

```
JavaScript
{

    "@context": {
        "ore": "http://www.openarchives.org/ore/terms/",
        "skos": "http://www.w3.org/2004/02/skos/core#",
        "dc": "http://purl.org/dc/elements/1.1/",
        "edm": "http://www.europeana.eu/schemas/edm/",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "dcterms": "http://purl.org/dc/terms/",
        "foaf": "http://xmlns.com/foaf/0.1/",
        "geo": "http://www.w3.org/2003/01/geo/wgs84_pos#"
    },
    "@graph": [
        {
            "@id": "http://data.europeana.eu/aggregation/europeana/09102/_CM_0839888",
            "@type": "edm:EuropeanaAggregation",
            "dc:creator": "Europeana",
            "edm:aggregatedCHO": {
                "@id": "http://data.europeana.eu/item/09102/_CM_0839888"
            },
            "edm:collectionName": "09102_Ag_EU_MIMO_ESE",
            "edm:country": "Europe",
            "edm:landingPage": {
                "@id": "http://www.europeana.eu/portal/record/09102/_CM_0839888.html"
            },
            "edm:language": "mul",
            "edm:rights": {
                "@id": "http://creativecommons.org/licenses/by-nc-sa/3.0/"
            }
        },
        {
            "@id": "http://data.europeana.eu/aggregation/provider/09102/_CM_0839888",
            "@type": "ore:Aggregation",
            ...
        },
        {
            "@id": "http://data.europeana.eu/item/09102/_CM_0839888",
            "@type": "edm:ProvidedCHO"
        },
        {
            "@id": "http://data.europeana.eu/proxy/europeana/09102/_CM_0839888",
            "@type": "ore:Proxy",
            ...
        },
        {
            "@id": "http://data.europeana.eu/proxy/provider/09102/_CM_0839888",
            "@type": "ore:Proxy",
            ...
        },
        {
            "@id": "http://mediatheque.cite-musique.fr/masc/play.asp?ID=0839888",
            "@type": "edm:WebResource"
        },
        {
            "@id": "http://semium.org/time/1910",
            "@type": "edm:TimeSpan",
            ...
        },
        {
            "@id": "http://semium.org/time/19xx_1_third",
            "@type": "edm:TimeSpan",
            ...
        },
        {
            "@id": "http://sws.geonames.org/2950159",
            "@type": "edm:Place",
            ...
        },
        {
            "@id": "http://www.geonames.org/2950159",
            "@type": "edm:Place",
            ...
        },
        {
            "@id": "http://www.mimo-db.eu/InstrumentsKeywords/4495",
            "@type": "skos:Concept",
            ...
        },
        {
            "@id": "http://www.mimo-db.eu/media/MF-GET/IMAGE/MFIM000024482.jpg",
            "@type": "edm:WebResource",
            ...
        }
    ]

}
```

The big differences between normal JSON and JSON-LD are

1) JSON-LD makes use of [Internationalized Resource Identifiers, IRIs](http://en.wikipedia.org/wiki/Internationalized_resource_identifier) as property names. This ensures that each statement of a record matches a standard vocabulary. In Europeana's implementation the properties are qualified names (in the format of "namespace_prefix:property_name" such as "dc:creator") for the sake of brevity. In the normal JSON response we use non-standard camel case ("dcCreator") property names. In the [data fields](/api/data-fields/) page you can find the connections between our camelCase property names and the JSON-LD and RDF qualified names.

2) JSON-LD has a `@context` part, which links object properties in a JSON document to concepts in an ontology. In our JSON-LD  this lists the used namespaces and their prefixes.

3) JSON-LD makes a distinction between the resource type values (), and string literals

A resource value:

```
JavaScript
"edm:landingPage": {
  "@id": "http://www.europeana.eu/portal/record/09102/_CM_0839888.html"
}, 
```

A normal string literal:

```
JavaScript
"dc:creator": "Europeana",
```

