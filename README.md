# Platform Frontend
![alt text](/src/images/Platform%20Logo.png)

## About Platform

Platform is an all in one application, allowing user to view videos from Twitch and Youtube in one single application.

A user can select from a list of creators, each of which have their own Youtube and Twtich videos. When selected, the videos are displayed on a seperate webpage.

![Gif of the application running](/src/images/Demo%20Gif.gif)

The respective creator has a details page, which displays the most recent videos from their Youtube page and their most recent Twitch streams. If a creator doesn't have a Youtube or Twitch, a message states that there is no information for the user to see in that section.

## Using this application

This application is the Frontend portion of the application, which is deployed at this url:

https://capstonefrontend-dun.vercel.app/

The Backend services that are in charge of the data retrieval for the creators information and videos are hosted at a different repository, located here:

https://github.com/2310-social-media-aggregator/backend

Additionally, this Repo can also be cloned to your local machine and ran locally. To do this, follow these steps:

1. run ```git clone git@github.com:2310-social-media-aggregator/frontend.git``` in your terminal
2. ```cd``` into that repository
3. run ```npm start``` to turn on the application

### Future extensions:
Our team plans to add more services to this application over time. For starters, we plan to add a feature that will allow users to save creators to their own personal list, which will be showed by default at the start of the application.

Other features include adding more services to the Backend, such as Twitter and Instagram, that will be displayed on the Creators respectice details page.
