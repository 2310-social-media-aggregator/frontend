# Platform Frontend
![alt text](/src/images/Platform%20Logo.png)

Welcome to Platform! This all-in-one application allow users to view their favorite creators' videos, twitch streams, and other social media platforms all in one place. This application is made of 2 parts, a Front-end application and a Back-end application. This repo hosts the Front-End portion of the application.

## Developers
### Frontend:
- Matthew Shindel  matthew@shindel.com
- Dana Zack danaezack@gmail.com
- Edward Gavin Garcia Edwardgavingarcia@yahoo.com


### Backend:

- Quin Nordmark quinnordmark@gmail.com
- Issac Mitchell tmitchellisaac@gmail.com
- Dylan Perry dylanbperry@gmail.com

## About Platform

Platform is an all in one application, allowing user to view videos from Twitch and Youtube in one single application.

A user can select from a list of creators, each of which have their own Youtube and Twtich videos. When selected, the videos are displayed on a seperate webpage.

![Gif of the application running](/src/images/Demo%20Gif.gif)

The respective creator has a details page, which displays the most recent videos from their Youtube page and their most recent Twitch streams. If a creator doesn't have a Youtube or Twitch, a message states that there is no information for the user to see in that section.

## Technologies

![Image collage](/src/images/Image%20Collage.png)

The goal for this application was to develop an app using techonologies that both the Front-end and Back-end teams were unfamiliar with. For the Front-end, we choose to build this React application using Typescript as the primary language. We used Github actions to incorperate CI into the projects workflow, using Cypress as our testing framework. We plan to add more test using the React Testing Library to further improve our testbench, allowing us to test individual components in our application.

For the Back-end of this project, they developed the application using Ruby, with Ruby on Rails being their base framework. For the Twitter webscraping, Python was built in Flask to get accurate data from Twitter. Finally, Honeycomb was used for data observability.

The Front-end application is deployed via Vercel, as it was the easiest to deploy and the best free option available. The Back end of this application was deployed on Heroku.

![Vercel Deployment](/src/images/vercelDeployment.png)

## Developing this Application

To develop the Frontend portion of this application, we built both a wireframe and a component architecture before we started coding our application.

![Wireframe](/src/images/WireFrame.png)
This wireframe outlines how our components interact with each other. The main home page displays the all of the creators that are saved in the Back-end server. When a user clicks on a user, a fetch request is sent to the Back-end server, which then returns that creator's information, including their Youtube videos, their most recent Twtich streams, and so on. Keep in mind that their is only one fetch request made to get the Youtube and Twitch information, with the buttons at the tops of the Creators page only showing and hiding their specific sections. This was done to make sure we don't query our Back-end database to much. 

Future extensions will aim to also show the creators Twitter page, their Instagram post, and so on. To move between webpages, we used React Router to make sure each Creator has their own specific url, which allows users to move through the webpage easier.

![Component Architecture](/src/images/Component%20Architecture%20complex.png)
This component architecture outlines how data is passed between components in our webpage. The App is the highest level component, which all other component send and recieve props from. This was made before we started coding, but for the most part, this component architecture is accurate to our actual application. 

## Using this Application

This application is the Frontend portion of the application, which is deployed at this url:

https://capstonefrontend-dun.vercel.app/

The Backend services that are in charge of the data retrieval for the creators information and videos are hosted at a different repository, located here:

https://github.com/2310-social-media-aggregator/backend

Additionally, this Repo can also be cloned to your local machine and ran locally. To do this, follow these steps:

1. run ```git clone git@github.com:2310-social-media-aggregator/frontend.git``` in your terminal
2. ```cd``` into that repository
3. run ```npm start``` to turn on the application

## Features
This application has some built in protect to let a user know if they can't access a certain webpage.

If the server cannot retrieve user information from the backend, an error message is displayed, telling the user that their information is unavailable.

![No User Data](/src/images/NoUserData.png)

If a user selects a creator that doesn't have videos for either Youtube or Twitch, an error message is displayed.

![No Videos for this Creator](/src/images/NoVideosCreator.png)

If a user types in an incorrect or invalid URL, an error page is displayed.

![Error Page](/src/images/ErrorPage.png)

### Future Extensions:
Our team plans to add more services to this application over time. For starters, we plan to add a feature that will allow users to save creators to their own personal list, which will be showed by default at the start of the application.

Other features include adding more services to the Backend, such as Twitter and Instagram, that will be displayed on the Creators respectice details page.
