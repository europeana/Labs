---
published: true
layout: blog-item
category: blog
permalink: blog/Europeana-Creative-Challenge-workshop-Barcelona
title: "2nd Europeana Creative Challenge Workshop, Barcelona, 16 July 2014"
imageurl: 
  - "/img/blog/2014-07-16-2nd-Europeana-Creative-Challenge-workshop.jpg"

tags:
  - eCreative

---
This blog post has been created to support the [Europeana Creative Challenge workshop, Barcelona, 16 July 2014](/events/2nd-Europeana-Creative-Challenge-workshop-Barcelona/), held in association with Apps&Cultura. For those not able to attend, the event will be livestreamed at [http://xmpp.iglor.es/appscultura_europeanalab/](http://xmpp.iglor.es/appscultura_europeanalab/)

This post is also a place where anyone interested in the challenges can post ideas and requests related to the API and the Challenge - just [add a comment](#comments) below and we'll respond.

## Getting started
You should find everything you need to get started using the Europeana API in the Europeana Labs website.

### New to Europeana?
- explore our [sample datasets](/data) to see examples of just some of the openly licensed content that is available
- get inspiration from our [gallery of existing apps](/apps) to see what is possible.

### New to the Europeana API?
- if you haven't already done so, [register for a Europeana API key](/api/registration/)
- take a little time to read the [Getting Started guide](/api/introduction/) to the Rest API.

### Give it a try
- our [API Console](/api/console/) allows you to easily build and test queries
- there are a number of client libraries available for languages such as php, Python and Django
- we have also produced a [directory of open source tools](/apps/#tag=open-source-tools) that might be useful to developers, covering topics such as metadata management, annotation, front end display etc.

### Collaborate
- we're always keen to facilitate collaborations between developers, and with our own team. A great example is the [Europeana Open Culture app for iOS and Android](http://labs.europeana.eu/apps/europeana-open-culture/) which has been released as an open source platform for building tablet-based experiences using Europeana content. It's [available on GitHub](https://github.com/europeana/openculture/wiki) under the "European Union Public Licence". 

### Need help?

If you have any questions, just leave a comment below or check out the [other ways to contact us](/support/contact/).

## Hints & tips

### Querying by location

- you can very easily specify a bounding box to query geotagged items. The easiest way to do this is via the [API Console](/api/console/) and enter coordinates in the 'Spatial params' filter
- to include non-geotagged items you can run standard text searches based on place names. These will naturally be less precise, but if you can't find what you want, or are getting a lot of unrelated items, experiment with 'where' and 'what' searches e.g. [where: Barcelona](http://labs.europeana.eu/api/console/?function=search&query=where:barcelona&start=1&rows=24) and [what: Barcelona](http://labs.europeana.eu/api/console/?function=search&query=what:barcelona&start=1&rows=24) (note that the former method will typically retrieve items located in Barcelona (e.g. from Barcelona-based collections), the latter typically items depicting Barcelona.

### Licensing

All metadata in Europeana is licensed as CC0 so is free to re-use. Individual items each have their own clearly marked license. 
- the simplest way to find openly re-usable content is to use the parameter [&reusability=open](http://labs.europeana.eu/api/console/?function=search&query=Barcelona&start=1&rows=24&profile=minimal&reusability=open)
- more information about the different licenses and how to query them is contained in the blog post [Can I use it?](/blog/can-i-use-it/)

### Retrieving media assets

This is a very common question from developers, so here's a quick overview and a few details about what can and what can't (currently at least) be done.

- every item returned in a standard search call will have a url to a thumbnail e.g. "edmPreview": [ "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fcoleccionfff.unav.es%2Fbvunav%2Fi18n%2Fcatalogo_imagenes%2Fimagen_id.cmd%3FidImagen%3D10000592&size=LARGE&type=IMAGE" ]  
(note that if we have not been able to create a thumbnail, for example if the item is not an image, then a placeholder thumbnail will be returned)

- in addition, each item **may** have a direct link to the original media file. This is returned in the edmIsShowBy attribute (**currently** only available through an individual record call so you would need to iterate through each item in the search results - we currently have a new 'rich' profile in development that will return this attribute within the search results)

- you can query just for records that have such links by using &query=provider_aggregation_edm_isShownBy:\* in your API call

- because of variability in the types of items and in the data supplied by providers, the format of these original files will vary (for example various image formats, pdfs, audio & video files, and links to html pages with image viewers). If you wanted to use this attribute for example to display high resolution images your code should first detect and check the format.
 
A lot of work is being undertaken to address this and provide a more direct and precise way of retrieving original media, but as illustrated by sites like [Culture Collage](http://www.zenlan.com/collage/europeana/#barcelona) and [museums.eu](http://museums.eu/museum/details/16007/the-british-library), and the [Europeana Open Culture mobile app](http://labs.europeana.eu/apps/europeana-open-culture/), rich experiences can still be created using the thumbnails alone.

## Where next?

Our data, API and associated documentation are constantly updated and improved. Much of this is in response to feedback and requests received from our user community. However big or small, we would love to hear your ideas and answer any questions you may have. Leave a comment below, or see some of the other ways to [contact us](/support/contact). 

---

<small>Header image: [Opstand in Barcelona, 1640, Johann David Zunnern, 1701](http://europeana.eu/portal/record/90402/RP_P_1896_A_19368_1959.html?start=8&query=barcelona&startPage=1&qf=TYPE%3AIMAGE&qf=REUSABILITY%3Aopen&qf=provider_aggregation_edm_isShownBy%3A*&qf=PROVIDER%3ARijksmuseum&rows=24) from Rijksmuseum (Public Domain).</small>

<a name="comments"></a>
