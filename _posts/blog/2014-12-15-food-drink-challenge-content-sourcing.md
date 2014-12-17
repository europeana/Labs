---
published: true
layout: blog-item
category: blog
permalink: blog/food-drink-challenge-content-sourcing
title: "Content sourcing for the Europeana Food and Drink Challenge"
imageurl: 
  - "/img/blog/2014-11-25-food-and-drink-challenge.jpg"

tags:
  - challenges
  - food and drink

---
The [first Europeana Food & Drink challenge](http://foodanddrinkeurope.eu/challengeone/) invites applicants to submit innovative tools, products and services using food and drink themed content from Europeana.  Here we highlight ways to access content, and outline techniques that you can use to discover more via Europeana's API.

## Example content

The Europeana Portal provides an easy, visual way to manually source content for your app. Try things like [cookbooks or recipes](http://europeana.eu/portal/search.html?query=cookbooks+OR+recipes&rows=24&qf=REUSABILITY%3Aopen&qt=false), [drinking songs](http://europeana.eu/portal/search.html?query=%22drinking+song%22&rows=24&qf=REUSABILITY%3Aopen&qt=false) or [cups and glasses](http://europeana.eu/portal/search.html?query=cup+OR+glass&rows=24&qf=REUSABILITY%3Aopen&qt=false).

All these searches are based on openly licensed material, but if your use is non-commercial this opens up even more possibilities.

To see some specific examples of what you might find, we've compiled [a list of around 30 top openly licensed images](https://docs.google.com/document/d/1zs_B-xOiQ2faCHR4vSPYdAPQvN84uph4WDImNNgF0E4/edit?usp=sharing)

## Using the Europeana API

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

## Hints & tips

### Using the translation API

Want to look for content from across Europe but don't know the word for beer in Swedish, or for sausage in Italian? The [Europeana translation API](http://labs.europeana.eu/blog/new-translation-method-in-API/) uses Wikipedia to provide translated terms in many European langauges, returning a search string that you can use directly in our standard search API method. You need to specify your term, and the list of languages that you want results for (up to a maximum of about 6 for performance reasons).

Here's an example:

```
http://europeana.eu/api/v2/translateQuery.json?languageCodes=en,de,fr,it,es,sv&wskey=api2demo&term=beer
```

whose response includes

```
"translatedQuery": "beer OR \"Beer\" OR \"Öl\" OR \"Cerveza\" OR \"Birra\" OR \"Bier\" OR \"Bière\""
```

Putting this into a standard search gives over 47,000 results, compared with 29,500 if you search for beer alone.

```
http://europeana.eu/api/v2/search.json?wskey=api2demo&query=beer%20OR%20\%22Beer\%22%20OR%20\%22%C3%96l\%22%20OR%20\%22Cerveza\%22%20OR%20\%22Birra\%22%20OR%20\%22Bier\%22%20OR%20\%22Bi%C3%A8re\%22&start=1&rows=20&profile=rich
```

Find out more about the tranlsation API on our previous blog post http://labs.europeana.eu/blog/new-translation-method-in-API/

### Licensing

All metadata in Europeana is licensed as CC0 so is free to re-use. Individual items each have their own clearly marked license.

- the simplest way to find openly re-usable content is to use the parameter [&reusability=open](http://labs.europeana.eu/api/console/?function=search&query=Barcelona&start=1&rows=24&profile=minimal&reusability=open)

- more information about the different licenses and how to query them is contained in the blog post [Can I use it?](/blog/can-i-use-it/)

### Retrieving media assets

This is a very common question from developers, so here's a quick overview and a few details about what can and what can't (currently at least) be done.

- every item returned in a standard search call will have a url to a thumbnail e.g. "edmPreview": [ "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fcoleccionfff.unav.es%2Fbvunav%2Fi18n%2Fcatalogo_imagenes%2Fimagen_id.cmd%3FidImagen%3D10000592&size=LARGE&type=IMAGE" ]  
(note that if we have not been able to create a thumbnail, for example if the item is not an image, then a placeholder thumbnail will be returned)

- in addition, each item **may** have a direct link to the original media file. This is returned in the edmIsShowBy attribute, but note that you **must** set `&profile=rich` to have these returned in standard search results.

- you can query just for records that have such links by using `&qf=provider_aggregation_edm_isShownBy:\*` in your API call

- because of variability in the types of items and in the data supplied by providers, the format of these original files will vary (for example various image formats, pdfs, audio & video files, and links to html pages with image viewers). If you wanted to use this attribute for example to display high resolution images your code should first detect and check the format.
 
A lot of work is being undertaken to address this and provide a more direct and precise way of retrieving original media, but as illustrated by sites like [Culture Collage](http://www.zenlan.com/collage/europeana/#barcelona) and [museums.eu](http://museums.eu/museum/details/16007/the-british-library), and the [Europeana Open Culture mobile app](http://labs.europeana.eu/apps/europeana-open-culture/), rich experiences can still be created using the thumbnails alone.

## Where next?

### Collaborate
- we're always keen to facilitate collaborations between developers, and with our own team. A great example is the [Europeana Open Culture app for iOS and Android](http://labs.europeana.eu/apps/europeana-open-culture/) which has been released as an open source platform for building tablet-based experiences using Europeana content. It's [available on GitHub](https://github.com/europeana/openculture/wiki) under the "European Union Public Licence". 

### Need help or have something to share?

If you have any questions, just leave a comment below or check out the [other ways to contact us](/support/contact/).

Our data, API and associated documentation are constantly updated and improved. Much of this is in response to feedback and requests received from our user community. However big or small, we would love to hear of your plans and answer any questions you may have. 

- Send us your ideas
- Consult us for tips
- Ask us to test
- Tell us your needs

### Enter the Challenge

The Food & Drink Challenge gives you a chance to pitch your app against other Europeana developers and the opportunity to win 5,000 €

- [enter the Europeana Food & Drink Challenge](http://foodanddrinkeurope.eu/challengeone/), closing date 20 December 2014.

---

<small>Header image: [Pieter Cornelisz van Rijck, Kitchen Scene with the Parable of the Rich Man and Poor Lazarus, 1610 – 1620](http://www.europeana.eu/portal/record/90402/SK_A_868.html?start=1&query=cornelisz+kitchen&startPage=1&rows=24) from Rijksmuseum (Public Domain).</small>

<a name="comments"></a>
