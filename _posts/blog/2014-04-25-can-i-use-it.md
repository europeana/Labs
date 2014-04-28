---
layout: blog-item
category: blog
permalink: blog/can-i-use-it
title: "Can I use it?"
imageurl: 
  - "/img/blog/2014-04-25-Can-I-use-it.png"
tags: 
  - "Re-use"
  - Rights
  - Facets
---

Uncovering the technology behind providing portal and API users with a simple search tool to discover reusable content.

<em>This is an extract from a blog post previously published by Peter Kiraly, software developer at Europeana. To read the full article visit <a href="http://kirunews.blog.hu/2014/02/13/solr_query_facets_in_europeana">http://kirunews.blog.hu/2014/02/13/solr_query_facets_in_europeana</a></em>

One of Europeana's important aims is to make the rights statements of records clear and straightforward. You can imagine, our >2,400 partners have different approaches for licensing their objects, and right now in the database we have 60+ different licence types, in other words the RIGHTS facet has 60+ individual values. Some of them are language or version variations of the same CC licence. Most users don't want to select from that range of options. But we can categorize these rights statements under 3 main categories:

- freely reusable with attribution (CC0, CC BY, CC BY-SA)
- reusable with some restrictions (CC BY-NC, CC BY-NC-SA, CC BY-NC-ND, CC BY-ND, OOC NC)
- reusable only with permissions (licences of the Europeana Rights Framework)

## How it was done

In Europeana we use Apache Solr for searching. Our data model is called EDM (Europeana Data Model), which has almost 200 fields. We also have special fields for facets and we have some aggregated fields. What we wanted to achieve was to form a new facet from these options, but the most straightforward solution, i.e. to create a new field in Solr, was not an easily implementable option because it would require a full reindexing (it would be another blog entry to explain why that was not possible), so we had to search for another solution. To count the numbers belonging to the individual rights statements in the RIGHTS facet would work, but that's only good for displaying, and it doesn't cover the problem of user interaction. To use the RIGHTS field for search turned out to be risky because it interferes with the RIGHTS facet, so that did not worked either. Finally we come up with a fake facet, which has two sides: one on the display side, and one on the search side.

To count the numbers we use a special Solr facet type: query facet. It is a simple, but at the same time a powerful solution. It doesn't give you a list of existing field values, as a normal facet. In the query facet the input is a query, and the returning value is a single number, which tells you how many records fit the combination of the main query and the query specified in the facet's parameter. Since we don't need to know the list of items in the categories, that's enough for us. We defined three queries:

- RIGHTS:("CC0" OR "CC BY" OR "CC BY SA")
- RIGHTS:("CC BY NC" OR "CC BY NC SA" OR "CC BY NC ND" OR "CC BY ND" OR "OOC NC")
- RIGHTS:(NOT("CC0" OR "CC BY" OR "CC BY SA" OR "CC BY NC" OR "CC BY NC SA" OR "CC BY NC ND" OR "CC BY ND" OR "OOC NC"))

### Europeana portal

On the Europeana portal we use a fake facet called ”REUSABILITY”, and we use it in our filtering parameter (&qf) as REUSABILITY:open, or REUSABILITY:restricted or REUSABILITY:permission. These are shortcuts for the lengthy queries. We keep the interface (and the URL) clean.

Explore this on the Portal: [europeana.eu](http://www.europeana.eu "Europeana portal")

### Europeana API

In the API we introduced the ”reusability” parameter with the same options as in the portal: "open", "restricted" and "permission".

Example API call: [http%3A%2F%2Feuropeana.eu%2Fapi%2Fv2%2Fsearch.json%3Fwskey%3D%5BYOUR%20API%20KEY%5D%26query%3D*%3A*%26reusability%3Dopen](http%3A%2F%2Feuropeana.eu%2Fapi%2Fv2%2Fsearch.json%3Fwskey%3D%5BYOUR%20API%20KEY%5D%26query%3D*%3A*%26reusability%3Dopen)

Explore this in the API console: [labs.europeana.eu/api/console/](http://labs.europeana.eu/api/console/ "Europeana APi console")


## Further information

For details of how this is implemented, including the actual Solr queries, read my original blog post at [http://kirunews.blog.hu/2014/02/13/solr_query_facets_in_europeana](http://kirunews.blog.hu/2014/02/13/solr_query_facets_in_europeana)

For more information about the Europeana Data Model see [http://pro.europeana.eu/edm-documentation](http://pro.europeana.eu/edm-documentation "Europeana Data Model")
To find out more about the Europeana API check the extensive online documentation section at [http://labs.europeana.eu/api/](http://labs.europeana.eu/api/ "Europeana API documentation")

Peter Kiraly, April 2014
[http://nl.linkedin.com/in/peterkiraly/](http://nl.linkedin.com/in/peterkiraly/)
