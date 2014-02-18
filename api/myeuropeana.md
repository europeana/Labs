---
layout: "api-page"
title: Accessing My Europeana via API
published: true
---

* TOC
{:toc}

## Introduction
 
Europeana API is supporting two methods to access MyEuropeana user data.
To access your own account only, you can use MyData methods providing 
an easy username/password login mechanism.
If you to get access to data of MyEuropeana users in your own application, 
we provide a authentication method based on the OAuth2 standards.
The provided methods are the same, with a path difference in the url's.

## OAuth2 User Authentication

OAuth2 is a token based authentication and authorisation system where your
user gets redirected to a login page on our server. After the login page the
user have to give permition to give access to the users data. On both steps
succesfully finished, the API server redirects back to a given url with an 
access token which can be used to access or modify data on our servers. 
The access token has a limited time life, but can be refreshed with a refresh 
token also given by the authorisation process.

This two url's are important for the process:

* *authorize*: `http://europeana.eu/api/oauth/authorize`
* *token refresh*: `http://europeana.eu/api/oauth/token`

There are many open source libraries available for a big variation of 
languages to help you implement this into your own project. See the page 
mentioned below for more information and a list of libraries.

More information: [OAuth.net/2/](http://oauth.net/2/).

## MyData Authentication

MyData methods use your public and private api keys to authenticate. Logging 
in is done by send a POST request to the following url and use the described 
parameters filled with the combination of both API keys.

* `http://europeana.eu/api/v2/login.do`

| Field | Description |
|:------|:------------|
| j_username | Your PUBLIC apikey |
| j_password | Your PRIVATE apikey |

For a succesfull login, you should get a status 200 back, otherwise it will 
trigger a redirect to a login html page. This can be ignored, the login page is
for testing purposes only.

## REST support

MyData methods (except from profile.json) support REST support. If you use
REST requests, don't include the action parameter.

## General response for all CR
