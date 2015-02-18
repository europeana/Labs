---
published: true
layout: blog-item
category: blog
permalink: blog/whos-using-what-Rein-van-t-Veer
title: Who's Using What - Rein van 't Veer Developer Profile
imageurl: 
  - "/img/blog/2015-02-15-whos-using-what-rein-van-tveer.jpg"
tags: 
  - FLOSS
secondarytags:
  - RDF
  - LOD
  - geocoding
---
This week's Who's Using What Developer Profile spotlights Rein van 't Veer from the [DEN Foundation](http://www.den.nl/english) (Digital Heritage Netherlands, The Hague). Rein specializes in location and heritage projects. His projects focus on archeology, the Semantic Web, Geographical Information Systems, Server Administration and Infrastructure, making use of Linux, Python and  Javascript. Rein was also formerly a field archaeologist. He has a research masters degree in archaeology from the University of Amsterdam. Let Rein tell you about the few but fantastic staple plus up and coming tools he's favoring. You can also check out his [Github](https://github.com/reinvantveer).

##1. What open source tools are you currently working with? 

In my work for the project [Heritage & Location](http://erfgoedenlocatie.nl/) at [DEN Foundation](http://www.den.nl/english) (Digital Heritage Netherlands, The Hague) we focus more and more on Linked Data, and [Virtuoso Open Source](http://virtuos.openlinksw.com/dataspace/doc/dav/wiki/Main/) is my open source RDF store of choice for the moment. I think it is the best-performing single-server open source RDF store currently around, with a staggering amount of features. The open source versions limited to only one processor, but the performance on that single thread is pretty impressive. I haven't really tried it to any real scale though.

## 2. What open source tools have you used in the past to develop larger applications?

I'd like to make a big shout out for [PostgreSQL](http://www.postgresql.org/)/[PostGIS](http://postgis.net/), the best spatial database solution available. The interoperability with so many tools and stack solutions is a marvel, the possibilities are simply endless and I can still can't believe my luck that such a versatile and powerful software package is freely available. GeoServer is another extensive suite for exposing spatial data (in PostGIS for example) with well-established protocols and formats.

## 3. What are you currently developing? 

I'm really excited about the historical geocoding service we're developing with Waag Society and the Cultural Heritage Agency of the Netherlands. It's based on [NodeJs](http://nodejs.org/), [ElasticSearch](http://www.elasticsearch.org/) and [Pelias](http://github.com/pelias/pelias), fantastic emerging technology. Especially after seeing some of [Douglas Crockford's speeches on Youtube](https://www.google.fr/search?q=douglas+crockford#=douglas+crockford&tbm=vid), I found that there is a new development field with NodeJS that really takes advantage of the benefits of JavaScript. Eventually, we're developing our historical geocoding service as a means for archives, libraries, museums and other heritage institutions for them to be able to geocode placenames that are long lost. It's in its earliest development stage at the moment, but at the end of the project we hope to provide a great enrichment service to the heritage sector.

## 4. What would you like to see developed?

Spatial and semantic technologies are still too far apart - that's generally missing in the semantic web field at the moment: good performance and diverse functionality on the spatial front. I'm really looking forward to seeing continued development for [Apache Jena](https://jena.apache.org/). It has been around for quite a while now and I've used it 'indirectly' with [Sparqlify](https://github.com/AKSW/Sparqlify). I hope they keep up the improvements and extend the spatial functionality to full GeoSPARQ specs.

 
