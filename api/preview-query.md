---
layout: "api-page2"
title: Query Syntax
published: true
excerpt: Search query syntax supported by the API
---
* TOC
{:toc}

Internally, Europeana uses [Apache Solr](http://lucene.apache.org/solr/) platform to store its data and thus [Apache Lucene Query Syntax](https://lucene.apache.org/core/4_1_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package_description) is supported by queries. Advanced users are encouraged to use Lucene and Apache SOLR guides to get most out of the Europeana repository. For others, we supply a basic guide for querying Europeana.

## Basic Search

To look for records that contain a search term in one of the data fields, provide the term as a **query** parameter:

    Syntax: "Mona Lisa"
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query="Mona+Lisa"

<!--[Test on API Console](/api/console/?function=search&query=%22Mona%20Lisa%22)-->

Note that like in many other search applications omitting the quotes will result in searching for records that contain the term _Mona_ or the term _Lisa_ but not necessarily both of them.

If you want to limit your search to a specific data field you should provide the name of the field using the following syntax. For example, to look for objects whose creator is _Leonardo da Vinci_:

    Syntax: who:"Leonardo da Vinci"
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=who:"Leonardo+da+Vinci"

<!--[Test on API Console](/api/console/?function=search&query=who:%22Leonardo%20da%20Vinci%22)-->

## Boolean Search

To combine several fields in one search one can use boolean operators AND, OR, and NOT (note the case-sensitivity). Use parentheses to group logical conditions. Note that two consecutive terms without any boolean operator in between default to the AND operator.

    Syntax: mona AND lisa
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=mona+AND+lisa

<!--[Test on API Console](/api/console/?function=search&query=mona%20AND%20lisa)-->

Boolean operators can also be combined with the search by fields. The following example searches for objects whose location is in _Paris_ or in _London_:

    Syntax: where:(Paris OR London)
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=where:(Paris+OR+London)

<!--[Test on API Console](/api/console/?function=search&query=where:%20%28Paris%20OR%20London%29)-->

The boolean NOT operator cannot be used alone but only in conjunction with another boolean operator. For example, looking for objects which contain the term _Lisa_ but do not contain the term _Mona_ is done by the following:

    Syntax: lisa NOT mona
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=lisa+NOT+mona

<!--[Test on API Console](/api/console/?function=search&query=lisa%20NOT%20mona)-->

## Range Search

To execute range queries, the range operator should be used. This example will search for objects whose field values fall between __a__ and __z__:

    Syntax: [a TO Z]
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=[a+TO+z]

<!--[Test on API Console](/api/console/?function=search&query=[a%20TO%20z])-->

As well as for textual fields it can also be used for numeric values, date ranges, or geographical areas, as shown below.

### Time Range Search

Looking for objects dated by a year between _1525_ and _1527_:

    Syntax: YEAR:[1525 TO 1527]
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=YEAR:[1525+TO+1527]

<!--[Test on API Console](/api/console/?function=search&query=YEAR:[1525%20TO%201527])-->

### Geographical Bounding Box Search

To search for objects by their geographic location you should specify the bounding box of the area. You need to use the range operator and the **pl_wgs84_pos_lat** (latitude position) and **pl_wgs84_pos_long** (longitude position) field. The following example will bring all the objects found between the latitude of 45° and 47° and between the longitude of 7° and 8°:

    Syntax: pl_wgs84_pos_lat:[45 TO 47] AND pl_wgs84_pos_long:[7 TO 8]
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=pl_wgs84_pos_lat:[45+TO+47]+AND+pl_wgs84_pos_long:[7+TO+8]

<!--[Test on API Console](/api/console/?function=search&query=pl_wgs84_pos_lat:[45%20TO%2047]%20AND%20pl_wgs84_pos_long:[7%20TO%208])-->

## Timestamp Search

One can also search objects by date. Currently, full-fledge date search is supported only for the fields storing the creation (timestamp_created) and update (timestamp_update) dates of the objects which are available in two formats: the UNIX epoch timestamp and the ISO 8601 formatted date. To search for objects created or updated on a given date, use the following query:

    Syntax: timestamp_created:"2013-03-16T20:26:27.168Z"
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=timestamp_created:"2013-03-16T20:26:27.168Z"

<!--[Test on API Console](/api/console/?function=search&query=timestamp_created:%222013-03-16T20:26:27.168Z%22)-->

    Syntax: timestamp_update:"2013-03-16T20:26:27.168Z"
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=timestamp_updated:"2013-03-16T20:26:27.168Z"

<!--[Test on API Console](/api/console/?function=search&query=timestamp_updated:%222013-03-16T20:26:27.168Z%22)-->

### Searching for date range (as [date1 TO date2]):

    Syntax: timestamp_created:[2013-11-01T00:00:0.000Z TO 2013-12-01T00:00:00.000Z]
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=timestamp_created:[2013-11-01T00:00:0.000Z+TO+2013-12-01T00:00:00.000Z]

<!--[Test on API Console](/api/console/?function=search&query=timestamp_created:[2013-11-01T00:00:0.000Z%20TO%202013-12-01T00:00:00.000Z])-->

    Syntax: timestamp_update:[2013-11-01T00:00:0.000Z TO 2013-12-01T00:00:00.000Z]
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=timestamp_update:[2013-11-01T00:00:0.000Z+TO+2013-12-01T00:00:00.000Z]

<!--[Test on API Console](/api/console/?function=search&query=timestamp_update:[2013-11-01T00:00:0.000Z%20TO%202013-12-01T00:00:00.000Z])-->

### Date mathematics

With date mathematics you can formulate questions, such as "in the last two months" of "in the previous week". The basic operations and their symbols are addition (+), substraction (-) and rounding (/). Some examples:

* now = NOW
* tomorrow: NOW+1DAY
* one week before now: NOW-1WEEK
* the start of current hour: /HOUR
* the start of current year: /YEAR

The date units are: YEAR, YEARS, MONTH, MONTHS, DAY, DAYS, DATE, HOUR, HOURS, MINUTE, MINUTES, SECOND, SECONDS, MILLI, MILLIS, MILLISECOND, MILLISECONDS (the plural, singular, and abbreviated forms refer to the same unit).

Let's see how to apply it in Europeana's context.

From xxx up until now

    Syntax: timestamp_created:[xxx TO NOW]
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&&query=timestamp_created:[2014-05-01T00:00:00.000Z+TO+NOW]

<!--[Test on API Console](/api/console/?function=search&query=timestamp_created:[2014-05-01T00:00:00.000Z%20TO%20NOW])-->

From xxx up until tomorrow

    Syntax: timestamp_created:[xxx TO NOW+1DAY]
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&&query=timestamp_created:[2014-05-01T00:00:00.000Z+TO+NOW%2B1DAY]

<!--[Test on API Console](/api/console/?function=search&query=timestamp_created:[2014-05-01T00:00:00.000Z%20TO%20NOW%2B1DAY])-->

Note: be careful, that the plus sign's proper URL encoded value is %2B, and sometimes space character is encoded as '+' sing, and it easy to mix up the encoded space with the unencoded plus.

From xxx up until yesterday

    Syntax: timestamp_created:[xxx TO NOW-1DAY]
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&&query=timestamp_created:[2014-05-01T00:00:00.000Z+TO+NOW-1DAY]

<!--[Test on API Console](/api/console/?function=search&query=timestamp_created:[2014-05-01T00:00:00.000Z%20TO%20NOW%2B1DAY])-->

Changes in the last two months

    Syntax: [NOW-2MONTH/DAY TO NOW/DAY]
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&&query=timestamp_created:[NOW-2MONTH/DAY+TO+NOW/DAY]

<!--[Test on API Console](/api/console/?function=search&query=timestamp_created:[NOW-3MONTH/DAY%20TO%20NOW/DAY])-->

You can find more about data mathematics at [Solr's API documentation](http://lucene.apache.org/solr/4_6_0/solr-core/org/apache/solr/util/DateMathParser.html)

## Refinements

So far we dealt with examples where there was only one query term. Sometimes it is useful to split a query into a variable and a constant part. For instance, for an application that accesses only objects located in London, it is possible to have the constant part of the query pre-selecting London-based objects and the variable part selecting objects within this pre-selection.

This can be done using the refinement parameter **qf** which is appended to the **query** parameter. This example looks for objects which contain the term _Westminster_ and their location is in _London_:

    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=Westminster&qf=where:London

<!--[Test on API Console](/api/console/?function=search&query=Westminster&qf=where:London)-->

Refinement parameters can be concatenated. Each such parameter and the mandatory query parameter contributes a [breadcrumb](/api/search/#breadcrumb) object if breadcrumbs are specified in the search profile.

## Faceted Search

Querying by [facets](/api/preview-search/#facet) is also done using the refinement parameter **qf**. The following example looks for objects containing the term _Paris_ among images:

    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=Paris&qf=TYPE:IMAGE

<!--[Test on API Console](/api/console/?function=search&query=Paris&qf=TYPE:IMAGE)-->

Here are more examples of faceted search. Looking for objects containing the term _Paris_ among objects described in _French_:

    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=Paris&qf=LANGUAGE:fr

<!--[Test on API Console](/api/console/?function=search&query=Paris&qf=LANGUAGE:fr)-->

Looking for objects containing the term _Paris_ among objects dated by the year _1789_:

    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=Paris&qf=YEAR:1789

<!--[Test on API Console](/api/console/?function=search&query=Paris&qf=YEAR:1789)-->
    
Looking for objects containing the term Paris among objects provided by an institution based in _France_:

    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=Paris&qf=COUNTRY:france

<!--[Test on API Console](/api/console/?function=search&query=Paris&qf=COUNTRY:france)-->

Looking for objects containing the term _Paris_ among objects protected by the [_Rights Reserved - Free Access_](http://www.europeana.eu/portal/rights/rr-f.html) licence:

    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=Paris&qf=RIGHTS:http://www.europeana.eu/rights/rr-f/

<!--[Test on API Console](/api/console/?function=search&query=Paris&qf=RIGHTS:http://www.europeana.eu/rights/rr-f/)-->
    
Looking for objects containing the term _Paris_ among objects provided by _The European Library_:

    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=Paris&qf=PROVIDER:The+European+Library

<!--[Test on API Console](/api/console/?function=search&query=Paris&qf=PROVIDER:%22The%20European%20Library%22)-->
    
Looking for objects containing the term _Paris_ among objects provided by the user community:

    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=Paris&qf=UGC:true

<!--[Test on API Console](/api/console/?function=search&query=Paris&qf=UGC:true)-->

Looking for objects containing the term _Paris_ that have an extra large image:

    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=Paris&qf=IMAGE_SIZE:extra_large

<!--[Test on API Console](/api/console/?function=search&query=Paris&qf=IMAGE_SIZE:extra_large)-->
