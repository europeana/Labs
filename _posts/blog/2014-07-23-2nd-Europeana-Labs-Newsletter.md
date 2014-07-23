---
layout: blog-item
category: blog
permalink: blog/2nd-Europeana-Labs-Newsletter
title: Europeana Labs update; take a Creative Challenge
imageurl: 
  - "/img/blog/140723-2nd-newsletter.jpg"
tags: 
  - Newsletter
---

**Welcome to the 2nd Europeana Labs newsletter. Every few months we bring you the latest news from Europeana, focussed on showcasing the exciting opportunities available to our developer community and inspiring you to be creative with Europe’s cultural heritage!**

* TOC
{:toc}

<small>Image credit: [Madonna and Child, Ambrogio Borgognone (1465-1525) vanGo’d by Nina](http://vangoyourself.com/vango/madonna-and-child-ambrogio-borgognone-1465-1525-vangod-by-nina/ "Madonna and Child, Ambrogio Borgognone (1465-1525)  vanGo’d by Nina" [CC BY-SA](http://creativecommons.org/licenses/by-sa/3.0/ "Creative Commons Attribution Share-Alike 3.0 (CC BY-SA)") via the Europeana Creative pilot project [VanGoYourself](http://vangoyourself.com/).</small>
<br>

## Apply now for 2nd Europeana Creative Innovation Challenges
 
Are you a creative developer or entrepreneur? Would you like to use your skills to build an exciting product using Europe’s cultural heritage?  If so, take your idea, build a prototype that taps into the 33 million objects in the Europeana collections, then enter our latest challenges.
 
Get started by visiting [Europeana Labs](http://labs.europeana.eu/), explore the pre-selected datasets for inspiration, and take a look at our pilot apps which demonstrate the kinds of things it’s possible to do with Europeana content and a bit of imagination.
 
Once you develop your idea just [register and submit your application on istart.org](http://ecreativechallenges2014.istart.org/). Entries close 28 August 2014.
 
The challenge finalists will be invited to pitch their idea to an investor audience at the Innovation Challenges Event in Barcelona on 23 September 2014, organised in collaboration with Apps&Culture.

The best ideas (one for each theme of Tourism and Social Networks) will be awarded a hands-on Incubation Support Package prize. Over the course of three months, established experts in digital technologies, copyright, business development and marketing will help you bring your idea to market.

[Find out more about the challenges](http://www.europeanacreative.eu/web/europeana-creative/challenges)

---

## Europeana Labs Update

Europeana Labs is our new playground for developers. It’s a place for inspiration, innovation and sharing. Designed for our developer community, and driven by the feedback we received from you, we launched the Beta version back in April 2014 and have worked hard since then to refine the site to address the needs of our diverse and ever growing userbase.

In one place, you’ll now find everything from practical support through to inspirational apps and content:

- It’s the home for our [API documentation](http://labs.europeana.eu/api/) and the [API console](http://labs.europeana.eu/api/console/) where you can experiment with API calls. 
- There are examples of [client libraries](http://labs.europeana.eu/apps/#tag=client-library) and 50 selected [open source tools](http://labs.europeana.eu/apps/#tag=open-source-tools) that will help developers quickly build new apps using the Europeana API and content.
- You’ll find [featured datasets](http://labs.europeana.eu/data/), selected to showcase providers who have supplied high quality, openly licensed, re-usable content. 
- Our [apps gallery](http://labs.europeana.eu/apps/) aims to inspire new ideas by featuring the wide range of existing applications.

We will now be concentrating on adding regular blog posts, events and yet more openly licensed datasets and inspirational apps. If there’s anything you’d like to see, just [let us know](http://labs.europeana.eu/support/contact/).

---

## Focus on World War One

It is no surprise that amongst Europeana’s 33 million objects, provided by over 2,300 institutions across Europe, there is a great deal of rich and often unique World War One related material. As with all Europeana content, this is directly accessible through the Europeana API. There’s no better illustration of this than the [Europeana 1914-18 website](http://www.europeana1914-1918.eu/) which is directly powered by the API. It delivers over 350,000 searchable records, including images, text, audio and video.   A unique aspect of these records is that they contain more than 130,000 items submitted by members of the public in the form of 10,000 personal stories, including photographs, diaries and war-related memorabilia. With most available under an open CC BY-SA license, there are some wonderful opportunities for creative re-use through the API. 

Here are some example queries to get you started - browse the content through the Europeana Portal, or take a look at how you can retrieve these records for your own app through the API console:

- Over 10,000 user contributed stories: [Browse stories](http://www.europeana1914-1918.eu/en/collection/search?count=12&page=1&utf8=%E2%9C%93&qf%5Bindex%5D=c) &#124; [Browse items](http://europeana.eu/portal/search.html?query=*%3A*&rows=24&qf=%28%22world%2Bwar%2BI%22+OR+%221914-1918%22%29&qf=UGC%3Atrue) &#124; [API console](http://labs.europeana.eu/api/console/?function=search&query=*:*&qf=(%22world+war+I%22)%20OR%20(%221914-1918%22)&qf=UGC:true&profile=minimal&reusability=open)
- The Somme in WW1: [Browse items](http://europeana.eu/portal/search.html?query=Somme&rows=24&qf=%28%22world%2Bwar%2BI%22+OR+%221914-1918%22%29) &#124; [API console](http://labs.europeana.eu/api/console/?function=search&query=somme&qf=(%22world+war+I%22%20OR%20%221914-1918%22))
- A small selection of openly licensed video and audio clips: [Browse items](http://europeana.eu/portal/search.html?query=*%3A*&qf=TYPE%3AVIDEO&qf=TYPE%3ASOUND&qf=%28%22world%2Bwar%2BI%22%29+OR+%28%221914-1918%22%29&qf=REUSABILITY%3Aopen) &#124; [API console](http://labs.europeana.eu/api/console/?function=search&query=*:*&qf=(%22world+war+I%22)%20OR%20(%221914-1918%22)&qf=TYPE:VIDEO%20OR%20TYPE:SOUND&profile=minimal&reusability=open) 

---

## API news

Our development team is constantly working to enhance the features available to access our content. This is through the APIs, other platforms such as the search portal, and specialist sites like Europeana 1914-18. You can always see the latest Rest API enhancements in our [change log](http://labs.europeana.eu/api/changelog/) - in the last 12 months there have been many notable additions, for example a simplified rights-related search based on the question [Can I use it?](http://labs.europeana.eu/blog/can-i-use-it/) There’s a lot more in the pipeline and much of this is driven by requests from you, our users.

We welcome [feedback and suggestions](http://labs.europeana.eu/support/contact/), however big or small.

---

## Keep up-to-date

This developer newsletter is sent out every few months, but if you want more immediate news [sign up to our developer forum](https://groups.google.com/forum/#!forum/europeanaapi) where you will see announcements of new features and have a chance to chat with fellow developers. Also, keep an eye on the Europeana Labs website which will be continuously updated with new datasets, apps, events and blog posts. There’s a [handy rss feed](/rss.xml) too.

---

## Share your news

If you’re working with the Europeana APIs and have something to share, do [let us know](http://labs.europeana.eu/support/contact/). We’re always excited to read of new ways that developers have found to use our content and we feature the best of these here on Europeana Labs. For selected ones we’ll be inviting guest blog posts where you can share your experiences and promote your work.

*Best regards,*

*James Morley*

*The Europeana Labs team*

PS We’ve sent this newsletter out via email to all our API key holders, and to those who have expressed an interest in hearing the latest developer news. If you want to be added to the list please [subscribe for updates via email here](http://eepurl.com/RpdnT) (frequency will be no more than once per month, and clearly we will not use your details for any other purpose).

---
