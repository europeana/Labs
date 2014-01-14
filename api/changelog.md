---
layout: api-page
title: API Change Log
---

This document describes the changes of Europeana API. The changes are grouped by new API versions. We deploy new versions of the portal and the API quite regularly, but not all new versions has change in the interface. The API documentation always describes the current version of the API. We don't have (yet?) however API call to get the actual version, so the API users should see the date of changes.

### Version 2.0.6 (2013-08-09)

New allowable value for the _profile_ parameter: `params`. When client adds `params` to the _profile_ parameter, the header of the response will contain a `params` key, which lists the requested and default parameters of the API call. The client can use profile _profile_ parameter in search and object calls. The parameter accepts both single and multiple values separated by comma or space (such as `&profile=standard` or `&profile=standard,params` or `&amp;profile=standard%20params`).

#### Example

```
http://europeana.eu/api/v2/search.json?wskey=xxxxxxxx&amp;query=mona+lisa&amp;profile=standard%20params
```

returns

<pre>
{
  "apikey": "xxxxxxxxx",
  "action": "search.json",
  "success": true,
  "requestNumber": 6,
  "params": {
    "query": "mona lisa",
    "profile": "standard params",
    "start": 1,
    "rows": 12
  },
  "itemsCount": 12,
  "totalResults": 195,
  "items": [...]
}
</pre>