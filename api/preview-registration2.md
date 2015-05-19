---
layout: api-page2
title: API Registration
---

* TOC
{:toc}

### Usage Limit

Applications are permitted to perform up to 10000 calls in 24 hours. If you need more than that please [contact us](mailto:api@europeana.eu).

[^datatype]: [Datatype defitions](api-introduction.html#data-types "API1-API2 Mapping")

### Example

The call `http://europeana.eu/api/v2/search.json?wskey=xxxxxxxx&query=mona+lisa&profile=standard%20params` returns

```json
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
```

#### Javascript

And some javascript, just to check the syntax formatting.

{% highlight java %}
var sum = function() {
    var i, x = 0;
    for (i = 0; i < arguments.length; ++i) {
        x += arguments[i];
    }
    return x;
}
sum(1, 2, 4); // returns 6
{% endhighlight %}
