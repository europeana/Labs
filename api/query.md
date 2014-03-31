---
layout: "api-page"
title: Query Syntax
published: true
excerpt: "Search query syntax supported by the API"
---

Internally, Europeana uses [Apache SOLR](http://lucene.apache.org/solr/) platform to store its data and thus [Apache Lucene Query Syntax](https://lucene.apache.org/core/4_1_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package_description) is supported by queries. Advanced users are encouraged to use Lucene and Apache SOLR guides to get most out of the Europeana repository. For others, we supply a basic guide for querying Europeana.

## Basic Search

To look for records that contain a search term in one of the data fields, provide the term as a **query** parameter:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query="Mona Lisa"
[Test on API Console](http://labs.europeana.eu/api/console/?function=search&query=%22Mona+Lisa%22)

Note that like in many other search applications omitting the quotes will result in searching for records that contain the term _Mona_ or the term _Lisa_ but not necessarily both of them.

If you want to limit your search to a specific data field you should provide the name of the field using the following syntax. For example, to look for objects whose creator is _Leonardo da Vinci_:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=who:"Leonardo da Vinci"
[Test on API Console](http://labs.europeana.eu/api/console/?function=search&query=who:%22Leonardo%20da%20Vinci%22)

## Boolean Search

To combine several fields in one search one can use boolean operators AND, OR, and NOT (note the case-sensitivity). Use parentheses to group logical conditions. Note that two consecutive terms without any boolean operator in between default to the AND operator.

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=mona AND lisa
 [Test on API Console](http://labs.europeana.eu/api/console/?function=search&query=mona%20AND%20lisa)

Boolean operators can also be combined with the search by fields. The following example searches for objects whose location is in _Paris_ or in _London_:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=where: (Paris OR London)
[Test on API Console](http://labs.europeana.eu/api/console/?function=search&query=where:%20%28Paris%20OR%20London%29)

The boolean NOT operator cannot be used alone but only in conjunction with another boolean operator. For example, looking for objects which contain the term _Lisa_ but do not contain the term _Mona_ is done by the following:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=lisa NOT mona
[Test on API Console](http://labs.europeana.eu/api/console/?function=search&query=lisa%20NOT%20mona)

## Refinements

So far we dealt with examples where there was only one query term. Sometimes it is useful to split a query into a variable and a constant part. For instance, for an application that accesses only objects located in London, it is possible to have the constant part of the query pre-selecting London-based objects and the variable part selecting objects within this pre-selection.

This can be done using the refinement parameter **qf** which is appended to the **query** parameter. This example looks for objects which contain the term _Westminster_ and their location is in _London_:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=Westminster&qf=where:London
[Test on API Console](http://labs.europeana.eu/api/console/?function=search&query=Westminster&qf=where:London)

Refinement parameters can be concatenated. Each such parameter and the mandatory query parameter contributes a [breadcrumb](http://labs.europeana.eu/api/search/#breadcrumb) object if breadcrumbs are specified in the search profile.

## Faceted Search

Querying by [facets](http://labs.europeana.eu/api/search/#facet) is also done using the refinement parameter **qf**. The following example looks for objects containing the term _Paris_ among images:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=Paris&qf=TYPE:IMAGE
[Test on API Console](http://labs.europeana.eu/api/console/console/?function=search&query=Paris&qf=TYPE:IMAGE)

Here are more examples of faceted search. Looking for objects containing the term _Paris_ among objects described in _French_:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=Paris&qf=LANGUAGE:FR
[Test on API Console](http://labs.europeana.eu/api/console/console/?function=search&query=Paris&qf=LANGUAGE:FR)

Looking for objects containing the term _Paris_ among objects dated by the year _1789_:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=Paris&qf=YEAR:1789
[Test on API Console](http://labs.europeana.eu/api/console/console/?function=search&query=Paris&qf=YEAR:1789)
    
Looking for objects containing the term Paris among objects provided by an institution based in _France_:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=Paris&qf=COUNTRY:france
[Test on API Console](http://labs.europeana.eu/api/console/console/?function=search&query=Paris&qf=COUNTRY:france)

Looking for objects containing the term _Paris_ among objects protected by the [_Rights Reserved - Free Access_](http://www.europeana.eu/portal/rights/rr-f.html) licence:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=Paris&qf=RIGHTS:http://www.europeana.eu/rights/rr-f/
[Test on API Console](http://labs.europeana.eu/api/console/console/?function=search&query=Paris&qf=RIGHTS:http://www.europeana.eu/rights/rr-f/)
    
Looking for objects containing the term _Paris_ among objects provided by _The European Library_:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=Paris&qf=PROVIDER:The+European+Library
[Test on API Console](http://labs.europeana.eu/api/console/console/?function=search&query=Paris&qf=PROVIDER:The+European+Library)
    
Looking for objects containing the term _Paris_ among objects provided by the user community:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=Paris&qf=UGC:true
[Test on API Console](http://labs.europeana.eu/api/console/console/?function=search&query=Paris&qf=UGC:true)
    
    
## Time Range Search

Looking for objects dated by a year between _1525_ and _1527_:

    http://www.europeana.eu/api/v2/search.json?wskey=xxxx&query=YEAR:[1525 TO 1527]
[Test on API Console](http://labs.europeana.eu/api/console/console/?function=search&query=YEAR:[1525%20TO%201527])
