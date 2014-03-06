---
layout: "api-page"
title: API Authentication
published: true
---

Europeana API supports three kinds of user authentication that are used in three different application scenarios. To perform general API calls, like [search](http://labs.europeana.eu/api/search), [object](http://labs.europeana.eu/api/object) or [provider/collection](http://labs.europeana.eu/api/provider), which do not involve user-specific information, the most basic authentication scheme is used. For accessing user-specific data stored on MyEuropeana accounts using [MyData](http://labs.europeana.eu/api/myeuropeana) calls, a caller application is to be identified by the user credentials. Finally, for applications wishing to get 3rd party access on behalf of a registered user, OAuth2 authentication scheme is supported.

### Basic Authentication

This is the simplest form of authentication which does not involve accessing user-specific information. To perform a call using this authentication every API call must be provided a special authentication parameter _wskey_. This value of this parameter should be the private key that you got during the API user registration process. We use these keys to anonymously gather interesting statistics about API usage.

### User Authentication

This form of authentication is used when an application wishes to access MyEuropeana data of a specific user and the public and the private keys of this user are known available in advance. In this case login is done by calling a POST method

    http://europeana.eu/api/v2/login.do    

with the following two parameters that contain authentication credentials:

|Parameter|Description|
|:-------------|:-------------|
|j_username | Your PUBLIC apikey |
|j_password | Your PRIVATE apikey |


When a login is successful a status 200 is returned, otherwise a redirect to the login page is triggered. 

### OAuth2 Authentication

For applications that wish to access MyEuropeana data of a specific end-user on his behalf, we use the standard [OAuth2](http://oauth.net/2/) authentication scheme. This scheme works by redirecting the application to a dedicated login page provided by the server and issuing to the application an authenticating token with a limited lifetime when the login is succesful. The token can be refreshed later on by the application. To use this kind of authentication the application should first access the URL

    http://europeana.eu/api/oauth/authorize
    
and further on the URL

    http://europeana.eu/api/oauth/token
    
    
to refresh the token.

There are many open source libraries available for various languages to help you implement this authentication scheme in your project. For more information, consult the [OAuth2 reference page](http://oauth.net/2/).