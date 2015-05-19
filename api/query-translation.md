---
layout: api-page
title: Query Translation
---

Translate a term to different languages and return a query string to use in the search API method. Right now this functionality is a wrapper around a Wikipedia API call.

## Request

| Parameter | Datatype | Description |
|:-------------|:-------------|:-----|
| wskey | String |Your API key |
| languageCodes | String | The ISO language codes separated by commas or spaces |
| term | String | The term to translate |

## Response

| Name | Datatype | Description |
|:--------|:-------------|:-----|
| translations | Array | A list of translations. Each translation contains two fields:<br>text: the text of the translation<br>languageCode: the ISO language code of the translation |
| translatedQuery | String | A query string where each translations are concatenated by the boolean OR operator. |

## Example

Get the translations of Notre Dame

    http://europeana.eu/api/v2/translateQuery.json?languageCodes=nl,en,hu&wskey=xxxxxxxx&term=notre%20dame

It returns

```JavaScript
{
  "apikey": "xxxxxxxx",
  "action": "translateQuery.json",
  "success": true,
  "requestNumber": 8957,
  "translations": [
    {
      "text": "Notre-Dame",
      "languageCode": "nl"
    },
    {
      "text": "Notre Dame",
      "languageCode": "en"
    },
    {
      "text": "Notre Dame",
      "languageCode": "de"
    }
  ],
  "translatedQuery": "Notre-Dame OR \"Notre Dame\""
}
```

For background information see the blog post [Improving search across languages](http://blog.europeana.eu/2014/08/improving-search-across-languages/)