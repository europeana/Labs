---
published: true
layout: blog-item
category: blog
permalink: blog/whos-using-what-douglas-duhaime
title: Who's Using What - Douglas Duhaime Developer Profile
imageurl: 
  - "/img/blog/2015-01-22-whos-using-what-douglas-duhaime.jpg"
tags: 
  - FLOSS
secondarytags:
  - OCR
  - Natural Language Processing
---

This week&rsquo;s &ldquo;Who&rsquo;s Using What&rdquo; spotlight goes to [Douglas
Duhaime](http://douglasduhaime.com/); from the University of Notre Dame.
Douglas&rsquo;s research takes him to intersections of early modern
natural philosophy and classical political economy in eighteenth-century
literary works. &nbsp;Douglas has been pursuing the relationship between
these two facets by using natural language processing techniques,
running hand-written scripts on text data from [Early
English Books Online](http://eebo.chadwyck.com/home); (EEBO), [Enlightenment Century Collections Online](http://gdc.gale.com/products/eighteenth-century-collections-online/); (EECO) and the [Philosophical Transactions](http://rstl.royalsocietypublishing.org/); looking to trace patterns in
Enlightenment-era literary history. 

You can follow Douglas on [Twitter](https://twitter.com/douglasduhaime), [Github](https://github.com/duhaime), and DHcommons and gather more insight into his work on his [website](http://douglasduhaime.com).

## 1. What open source tools are you currently working with? 

I&#39;m currently working on a few different text
mining projects, a few of which use libraries like [WEKA](http://www.cs.waikato.ac.nz/ml/weka/); and
[scikit-learn](http://scikit-learn.org/stable/); for analysis and [ggplot](http://ggplot2.org/); or [D3](https://github.com/mbostock/d3); for visualization. Because a lot of my work
revolves around natural language processing, tools like the [Stanford NLP Pipeline](http://nlp.stanford.edu/software/corenlp.shtml)
, [Princeton&#39;s WordNet](http://wordnet.princeton.edu/), and the [Snowball stemmer](http://snowball.tartarus.org/); are standard resources. When working with
early modern texts, I&#39;ve also been using [Vard2](http://ucrel.lancs.ac.uk/vard/about/); and the
variant tables in the [MorphAdorner](http://morphadorner.northwestern.edu/); package for orthographical
normalization.

##  What open source tools have you used in the past to develop larger applications?

A few of the tools
I&#39;ve built draw upon [Selenium&#39;s](http://www.seleniumhq.org/); browser automation framework--which handles
well in Javascript and AJAX-rich environments--and [Whoosh&#39;s](https://pypi.python.org/pypi/Whoosh/); 
full text indexing functions. Almost everything I write draws upon
[Python&#39;s Natural Language Tool Kit](http://www.nltk.org/); and BeautifulSoup at
some point. When working on applications that require fuzzy string
matching, I like to use [difflib](https://docs.python.org/2/library/difflib.html)

## 3. What are you currently developing? 

I&#39;m working with
others in the University of Notre Dame&#39;s Text Mining Working Group
to develop an open source web service capable of identifying literary
allusions in user-provided texts. The prototype runs custom algorithms
against an SQLite database with a Django back-end, and uses many of the
text processing libraries discussed above.

## 4. What would you like to see developed?

I would like to see a library
capable of estimating the likelihood that a given text contains one or
more simple ciphers (substitution or null, for instance). Such a
resource would be highly useful in certain contexts. I also eagerly
await both the [EMOP](http://emop.tamu.edu/); team&#39;s OCR engine for early modern typography and a
package capable of achieving high sentiment classification scores on
older prose. Both will be very valuable tools.
