---
layout: "data-page"
title: Europeana Logs
published: true
---

We record user interactions with the Europeana portal. The log files provides access to search queries done by users and the various clicks executed on the portal. The equivalent of two months of logs files are stored and can be made accessible on demand.

Our logs have been analysed and used in the past by various research projects:

* The [CLEF](http://www.clef-initiative.eu/) initiative 
* The PATHS project: see more [documentation](http://paths-project.eu/eng/News/Participation-by-PATHS-partners-in-Cultural-Heritage-in-CLEF-CHiC) project
* ASSETS- Advanced Service Search and Enhancing Technological Solutions: see the related [report](http://pro.europeana.eu/web/assets/outcomes/-/document_library_display/rbR2/view/1977472)
* Europeana Connect for analysing users' attitudes and needs and opens new ways of discovering cultural heritage in Europeana: see the [results](http://www.europeanaconnect.eu/results-and-resources.php?page=3)
* [Galateas](http://www.galateas.eu/partners/ibi-universitaet-zu-berlin.html) project

If you would like to get access to the log files, please contact Antoine Isaac [antoine.isaac@europeana.eu] or Valentine Charles [valentine.charles@europeana.eu].

Be aware that any use of the lofs should comply  with Europeana's [privacy policy](http://europeana.eu/portal/rights/privacy.html)

We describe below the details of the Europeana Logs actions and the Europeana session clickstream. We thank Maria Gäde researcher at Humboldt-Universität zu Berlin for providing us with this documentation. 

##Europeana Logs actions 
| Action | Explanation |
|:-------------|:-------------|
| "BRIEF_RESULT"  | User launches a query and is directed to the brief result page.| 
| "FULL_RESULT_HTML"    | User clicks on an object from the result list and is directed to the detailed full result presentation| 
|"INDEXPAGE" | User views the homepage.|
|"REDIRECT_OUTLINK" | User clicks on a link directing to the content provider.|
|"RETURN_TO_RESULTS" | Users from a full view to the result list.|
|"STATICPAGE" | Pages views with no dynamic parameter such as “contact us”, “terms of use and policies”.|
|"BRIEF_RESULT" | Result list from a search query.|
|"LANGUAGE_CHANGE" | A user switches the interface language via drop down menu.|
|"LOGIN" | User logs in the user profile MyEuropeana.|
|"LOGOUT" | User logs out from MyEuropeana.|
|"LOGOUT_COOKIE_THEFT" | Matching of cookies fails.|
|"REGISTER" | User registers for MyEuropeana.|
|"REGISTER_FAILURE"| Registration process failed.|
|"REGISTER_SUCCESS"| The registration was successfully confirmed.|
|"EXCEPTION_CAUGHT"| Requested object was not found.|
|"CONTACT_PAGE" | User clicks on the contact / feedback page.|
|"FEEDBACK_SEND" | User has send a message at the feedback page.|
|"FULL_RESULT_FROM_TIME_LINE_VIEW" | Object view presented at the timeline.|
|"MY_EUROPEANA" | MyEuropeana link for registration or log in.|
|"FEEDBACK_SEND_FAILURE" | User message from the feedback page.|
|"CHANGE_PASSWORD_SUCCES" | User changed the log in password.|
|"SITE_MAP_XML" | XML rendition of the sitemap so crawlers can navigate the website.|
|"SAVE_ITEM" | Users saves an object in MyEuropeana.|
|"SAVE_SOCIAL_TAG" | Users assigns a tag to an object saved in MyEuropeana.|
|"CHANGE_PASSWORD_FAILURE" | Change of user profile password failed.|
|"FULL_RESULT_FROM_SAVED_ITEM" | A user clicks on a saved object and views the full result representation.|
|"SAVE_SEARCH" | User saves previous search terms in MyEuropeana.|
|"BRIEF_RESULT_FROM_SAVED_SEARCH" | User clicks on a previous saved search and receives a result list.|
|"REMOVE_SAVED_ITEM" | Users removes a saved object from MyEuropeana.|
|"REMOVE_SOCIAL_TAG" | User removes a tag from MyEuropeana.|
|"FULL_RESULT_FROM_CAROUSEL" | Users clicks on an object from the carousel. and is directed to the full result presentation.|
|"ERROR_TOKEN_EXPIRED" | User session is terminated due to inactivity.|
|"REMOVE_SAVED_SEARCH" | User removes saved search terms from MyEuropeana.|
|"AJAX_ERROR” | Error with Java Script request from front-end to back-end service.|
|"REDIRECT_TO_SECURE" | User is directed to a secure communication page (HTTPS).|
|"FULL_RESULT_HMTL" | The HTML rendering of the full result page.|
|"FULL_RESULT_SRW" | The XML SRU/SRW rendering of the full-result page.|
|"FULL_RESULT_JSON" | JSON output of the full-result.|


##Europeana session clickstream

| Field|Example|Explanation|
|:-----|:------|:-------|
|**Session statistics**|     |      |
|IP|B7A5C7280ACDE2F373D32BC53B7[…]|Unique identifier replacing IP address.|
|Countries55|BR|Country code derived from IP address.|
|Dates |2010-09-23| Date of access.|
|durationInMin, start_session, end_session |4; "10:35:37", "10:40:30"|Session duration in minutes with timestamp of first and last log entry.|
|userHasLoggedIn|false|Session with login to user profile.|
|inactivityBreak|true|Session was cut off due to inactivity after 60 minutes.|
|pageClicks|24| No. of performed actions / page views.|
|bounceSession|false|Session with only one page view / action.|
|Actions|"REDIRECT_OUTLINK" : 4, "FULL_RESULT" : 6 […]| List of actions with frequency; here: 4 times an outlink to content providers was used, 6 times a full object views was recorded, etc.|
|actionOrder|"INDEXPAGE" "BRIEF_RESULT", "RETURN_TO_RESULTS", [….] | Order of actions performed during a session|
|reqRefererPairs|http://www.google.com/search?hl=en&q=biblioteca+on+line >http://www.europeana.eu:80/portal/ ...| Request and referrer links for each log entry.|
|hasExternalReferrer|true|Session was started from an external referrer link.|
|googleLanguage, googleCountry|“en”; “com”|Language and country parameters from external Google links.|
|Queries|"europeana_uri:"http://www.europeana,eu/resolve/record/90101/079674BD6F20C0FB6CCAF1C6785BE655490406E8"" : 1, "Karl Marx" : 13, "Benjamin Franklin" : 2| Browsing, paging and related item queries with frequency; includes queries that are typed by the user (Karl Marx; Benjmin Franklin) as well as queries set by the system as consequence of a link request.|
|uniqueQueriesNr|3|No. of unique queries in session.|
|searchType|“Paging”: 5|Search types with query frequency: „initial“: first result page viewed,„paging“:at least 2 result pages viewed, “facet select”: first result page viewed with result refinement.|
|facetSelected|1|No. of search result pages with facet selection.|
|**Statistics for Brief Result Pages**|     |      |
|pageViews|6|No. of result list pages.|
|hasPagingSessions|True|Session includes brief result paging.|
|uniquePagingSessionNr|2|No. of unique brief result.paging sessions per query (Karl Marx; Benjamin Franklin).|
|pagingSessions|"Karl Marx" : 4,"Benjamin Franklin" : 2|Queries with result page interaction; for Karl Marx 4 result pages were viewed and for the query Benjamin Franklin only 2.|
|usesFacetsConstraints|true|Usage of facets.|
|hasLangFacetSelected|true|Usage of language facet.|
|selectedLangFacets|“pt”|Selected language facet.|
|hasCountryFacetSelected|false| Usage of country facet.|
|selectedCountryFacets|x|Selected country facet.|
|hasProviderFacetSelected|false| Usage of provider facet.|
|selectedProviderFacets|x|Selected provider facet. |
|queryConstraints|"\"TYPE:\"TEXT\"\"", "\"LANGUAGE:\"pt\"\"| Content of selected facets. |
|countryFacet|"france", "germany", "portugal"| Top three country facets returned. |
|languageFacet|"fr", "de" |Top three language facets returned.|
|**Statistics for Full Result Pages**|      |     |
|directFullViews|0|User landed on full view without performing a search.|
|uniqueFullViews 4|No. of unique full object views.|
|nrUniqueCollections|3|No. of unique collections viewed.|
|uniqueCollections|"00301", "92201", "90101"| Collection IDs.|
|collCountry|norway|Country of collection viewed.|
|collLanguage|no|Language of collection viewed.|
|Queries|"europeana_uri:"http://www.europeana.eu/resolve/record/90101/079674BD6F20C..."" : 1, "Karl Marx" : 5| Queries from which the user navigated to a full view.| 
|**Statistics for Interface Language**|     |     |
|Languages|"EN" : 1, "PT" : 23|For each page view, the interface language is determined; this session contains one page view with an EN and 23 page views with PT|
|uniqueLanguagesNr|2|Nr. of unique languages: EN, PT.|
|hasLanguageChange|true|Session includes an interface language change.|
|hasLanguageChangeFirst|false|Interface language change appeared as first action.|
|languageChangePairs|"EN->PT" : 1|Interface language change pairs.|
|userTriggeredlanguageChange|false|Session includes a user-triggered interface language change via drop-down menu.|
|languageChangeType|"cookie-change"|Interface language change type.|
|Locale|x|Browser language version.|

