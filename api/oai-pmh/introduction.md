---
layout: "api-page3"
title: Europeana OAI-PMH Service
published: true
---

The Europeana OAI-PMH Service allows you to harvest metadata using Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH v2.0). The OAI-PMH Service allows you to harvest the entirety, or a selection, of all Europeana metadata, so that it can be integrated into other services or applications.

To learn more about the Open Archives Initiative (OAI) and the harvesting [protocol](http://www.openarchives.org/OAI/openarchivesprotocol.html), see http://www.openarchives.org.

### Registration

Currently, the Europeana OAI-PMH Service is in beta, which means that access to the service is currently limited. If you want to start using and testing the Europeana OAI-PMH Service, you need to have an access key. Please note this is not the same as the API key for the REST API. See [get an access key](/oai-pmh-service/registration/) for more information on how to obtain an access key.

### Data source

The data source for the OAI-PMH Service is the Europeana Linked Open Data repository, which is updated on a monthly basis with all Europeana metadata.

### Testing the protocol

You can test the Europeana OAI-PMH Service and its protocol via the OAI-cat web interface, to be found here: http://oai.europeana.eu/oaicat/

### Known limitations

Currently, the Europeana OAI-PMH Service, has the following limitations:
The data source, the Europeana Linked Open Data repository, is updated with new content later than the Europeana REST API.
Europeana currently doesn't maintain a deleted record registry, which leads to a recommendation to re-harvest the entire collection at least every six months.

### Discussion

Join the [Europeana API discussion group at Google Groups](https://groups.google.com/forum/?pli=1#!forum/europeanaapi) and get regular updates about the Europeana API, provide feedback and discuss it with other developers.

### Terms of Use

Please see here our [Terms of Use](http://www.europeana.eu/portal/rights/api-terms-of-use.html).