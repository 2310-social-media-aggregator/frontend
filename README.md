# Platform Frontend
![alt text](/src/images/Platform%20Logo.png)

Welcome to Platform! This all-in-one application allows users to view their favorite creators' videos, Twitch streams, and other social media platforms in one place. It is made of two parts: a front-end application and a back-end application. This repo hosts the front-end portion of the application.

## Developers
### Front-end:
- Matthew Shindel  matthew@shindel.com
- Dana Zack danaezack@gmail.com
- Edward Gavin Garcia Edwardgavingarcia@yahoo.com


### Back-end:

- Quin Nordmark quinnordmark@gmail.com
- Issac Mitchell tmitchellisaac@gmail.com
- Dylan Perry dylanbperry@gmail.com

## About Platform

Platform is a social media aggregator application that allows users to browse through both YouTube and Twitch content of various content creators, as well as add/remove content creators from their own "saved creators" list.

A user can select from a list of creators, each of which have their own Youtube and Twitch videos. When selected, the videos are displayed on a seperate webpage.

![Gif of the application running](/src/images/Demo%20Gif.gif)

The respective creator has a details page, which displays the most recent videos from their YouTube page and their most recent Twitch streams. If a creator doesn't have a YouTube or Twitch, a message states that there is no information for the user to see in that section.

## Technologies

![Image collage](/src/images/Image%20Collage.png)

This application aimed to develop an app using technologies that both the front-end and back-end teams were unfamiliar with. For the front-end, we chose to build this React application using Typescript as the primary language. We used Github actions to incorporate CI into the project workflow, using Cypress as our testing framework. We plan to add more tests using the React Testing Library to further improve our testbench, allowing us to test individual components in our application.

For the back-end of this project, they developed the application using Ruby, with Ruby on Rails being their base framework. Python was built in Flask to get accurate data from Twitter for web scraping. Finally, Honeycomb was used for data observability.

The front-end application is deployed via Vercel, as it is the easiest to deploy and the best free option available. The back-end of this application was deployed on Heroku.

![Vercel Deployment](/src/images/vercelDeployment.png)

## Developing this Application

To develop the front-end portion of this application, we built both a wireframe and a component architecture before we started coding our application.

![Wireframe](/src/images/WireFrame.png)
The wireframe we developed outlines how our components interact with each other. For instance, the main home page displays all the creators that are saved in the back-end server. When a user clicks on a user, a fetch request is sent to the back-end server. This fetch request is designed to retrieve all the necessary information about the selected Creator, including their YouTube videos, their most recent Twitch streams, and so on. Importantly, we've optimized this process to minimize the number of fetch requests, ensuring that only one request is made to get the YouTube and Twitch information. The buttons at the top of the Creators page only show and hide their specific sections, preventing excessive querying of our back-end database. 

Future extensions will also aim to show the Creator's Twitter page, their Instagram posts, and so on. To move between webpages, we used React Router to ensure each Creator has their specific url, allowing users to move through the webpage more easily.

![Component Architecture](/src/images/Component%20Architecture%20complex.png)
This component architecture outlines how data is passed between components in our webpage. The app is the highest-level component, from which all other components send and receive props. This was made before we started coding, but for the most part, this component architecture is accurate to our actual application. 

## Using this Application

This application is the front-end portion of the application, which is deployed at this url:

https://capstonefrontend-dun.vercel.app/

The back-end services that are in charge of the data retrieval for the creators information and videos are hosted at a different repository, located here:

https://github.com/2310-social-media-aggregator/backend

Additionally, this Repo can also be cloned to your local machine and ran locally. To do this, follow these steps:

1. run ```git clone git@github.com:2310-social-media-aggregator/frontend.git``` in your terminal
2. ```cd``` into that repository
3. run ```npm start``` to turn on the application

## Features
This application has some built-in protection to let users know if they can't access a specific webpage.

If the server cannot retrieve user information from the backend, an error message is displayed, telling the user that their data is unavailable.

![No User Data](/src/images/NoUserData.png)

If a user selects a creator that doesn't have videos for either Youtube or Twitch, an error message is displayed.

![No Videos for this Creator](/src/images/NoVideosCreator.png)

If a user types in an incorrect or invalid URL, an error page is displayed.

![Error Page](/src/images/ErrorPage.png)

### Future Extensions:
Our team plans to add more services to this application over time. For starters, we plan to add a feature that will allow users to save creators to their own personal list, which will be shown by default at the start of the application.

Other features include adding more services to the back-end, such as Twitter and Instagram, which will be displayed on the Creator's respective details page.
