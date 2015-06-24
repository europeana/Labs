---
layout: "api-page3"
title: Getting started
published: true
---

* TOC
{:toc}

In this section you will find all information necessary to jump-start using Europeana's OAI-PMH Service.

## Access key

Ensure that you have obtained an [access key](/api/oai-pmh/access-key/), which is not the same as the access key for the REST API as long as the service is still in beta.

## What you can do with this service

The Europeana OAI-PMH Service can be used to harvest metadata records from Europeana. Metadata records can be harvested all at once (all of Europeana's metadata), or selectively per dataset or date of creation/modification. Further down this page you will find some information on the structure and definitions of the repository.

## Learn about OAI

If you are not familiar with OAI we recommend the [OAI for beginners tutorial](https://www.oaforum.org/tutorial/) from the Open Archives Forum. Please see the [resources page](/api/oai-pmh/resources/) for more online resources.

## Available requests

Below you can find the available requests. The base URL for all requests is http://oai.europeana.eu/. These links and requests return XML, for which you need to use an XML-aware browser or viewing application.

Here is the list of available requests defined by the OAI-PMH protocol:
* [Identify](http://oai.europeana.eu/oaicat/identify.shtml)
* [getRecord](http://oai.europeana.eu/oaicat/getRecord.shtml)
* [listIdentifiers](http://oai.europeana.eu/oaicat/listIdentifiers.shtml) ([Resumption](http://oai.europeana.eu/oaicat/listIdentifiersResumption.shtml))
* [listMetadataFormats](http://oai.europeana.eu/oaicat/listMetadataFormats.shtml)