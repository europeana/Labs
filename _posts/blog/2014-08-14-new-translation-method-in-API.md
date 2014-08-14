---
layout: blog-item
category: blog
permalink: blog/new-translation-method-in-API
title: New translation method in the Europeana API
imageurl: 
  - "/img/blog/140328-introduction-blog-post.jpg"
tags: 
  - API
  - features
  - translation
---
We have recently released a new translation method in the Europeana API.

Given the multilingual nature of the Europeana content, it's always been an ambition to provide tools that ensure that a simple search will retrieve objects from collections with metadata in different languages.

translateQuery.json is a wrapper that uses the Wikipedia API to return suggested translations in user-defined langauges and constructs the query syntax to then use in a standard search.

A sample API call would be 

    http://europeana.eu/api/v2/translateQuery.json?languageCodes=en,de,fr,it,es&wskey=xxxxxx&term=butterfly

which returns a json response that includes

    "translatedQuery":"Butterfly OR Tagfalter OR Rhopalocères OR Farfalla"

Users would then place that query string into a standard [search.json](http://labs.europeana.eu/api/search/) call, which in this case adds over 500 records to the results compared to a simple search for just 'butterfly'.

Languages should be defined using the two-letter codes according to the [ISO 639-1 standard](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). All we ask is that you don't run search queries with more than about 6 'OR' options as that puts quite a strain on our server!

Further documentation will be provided, but in the meantime there's some further detail in our [changelog](http://labs.europeana.eu/api/changelog/#v2translatequeryjson).

The same methodology has been employed on our own search portal, and you can find more about the background to this on our blog - [Improving search across languages](http://blog.europeana.eu/2014/08/improving-search-across-languages/)
