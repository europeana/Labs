---
layout: api-page2
title: API Change Log
---

* TOC
{:toc}

This document describes the changes of Europeana API. The changes are grouped by new API versions. We deploy new versions of the portal and API quite regularly, but not all new versions result in changes in the interface. The API documentation always describes the current version of the API. <!-- We don't have (yet?) however API call to get the actual version, so the API users should see the date of changes.-->

### Preview features

The API features listed below are experiemental features and part of the preview API first before making it available in production. The changelog below lists all changes made to the preview API which are not part of production, all other functionality should be the same.

## Version 2.0.14 (2015-05-01)

### Support for and inclusion of technical metadata

The API now supports technical metadata, metadata which is extracted from media files such as images. This results in new request parameters for the [search API](/api/preview-search/#request), the addition of [new facets](/api/preview-data-fields/#technical-metadata-facets) and an updated [response in the record API](/api/preview-record/#response). At the time of release, we have extracted technical metadata for a few millions of records. This number will increase gradually over the next few months.

An overview of the new API parameters:

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| media | Boolean | Filter by records where an URL to the full media file is present in the edm:isShownBy or edm:hasView metadata and is resolvable. Works only with 'true'. |

An overview of the new facets:

| Facet | Facet name in API | Description |
|:-------------|:-------------|:-------------|
| Mime-type | MIME_TYPE | The mime-type of a media file, such as image/jpeg for a JPEG file. | 
| Image size | IMAGE_SIZE | The dimensions of an image. |
| Image colour | IMAGE_COLOUR | Whether an image is a full-colour image. |
| Image greyscale | IMAGE_GREYSCALE | Whether an image is a greyscale image. | 
| Image aspect ratio | IMAGE_ASPECTRATIO | The aspect ratio of an image. | 
| Video HD | VIDEO_HD | Whether a video file can be classified as an HD-video. | 
| Video duration | VIDEO_DURATION | The duration of a video file. | 
| Sound HQ | SOUND_HQ | Whether a sound file can be classified as an HQ-sound. | 
| Sound duration | SOUND_DURATION | The duration of a sound file. | 
| Full text | FULL_TEXT | Whether the text in a text-object is searchable, such as most PDF files. |

Examples:

Find all records that match the query ‘Paris’ which are openly licensed and have large images:
 
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=Paris&reusability=open&qf=IMAGE_SIZE:large

<!--[Test on API Console](/api/console/?function=search&query=Paris&reusability=open&qf=IMAGE_SIZE:large)-->

Find all records that match the query Paris which have a thumbnail image, are of mime type image/jpeg and have an aspect ratio of 'landscape':
 
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=Paris&thumbnail=true&qf=MIME_TYPE:image%2Fjpeg&qf=IMAGE_ASPECTRATIO:landscape

<!--[Test on API Console](/api/console/?function=search&query=Paris&thumbnail=true&qf=MIME_TYPE:image%2Fjpeg&qf=IMAGE_ASPECTRATIO:landscape)-->

Find all records where the subject is opera and where the results are sound files with a long duration:
 
    http://beta.europeana.eu/v2/search.json?wskey=xxxx&query=what:opera&qf=SOUND_DURATION:long

<!--[Test on API Console](/api/console/?function=search&query=what:opera&qf=SOUND_DURATION:long)-->