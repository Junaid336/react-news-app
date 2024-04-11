# News Aggregaor
A react app for aggregatring news from multiple resources  which allows user to personalize their feed, search and filter the news.

## Features
- Authentication with credentials and google auth
- Personalized News Feed
- Categories
- Latest News
- Most Popular Topics
- Search News
- Filter search results (by dateFrom, dateTo, sortBy, language, countries, sources etc)
- For Personalized Feed Section User must be logged in first.
- Filters work on search-results page
## APIS Used
- [NewsApi.org](https://newsapi.org/ "NewsApi.org")
- [The New York Times](https://developer.nytimes.com/apis "The New York Times")
- [The Guardian OpenPlatform](https://open-platform.theguardian.com/ "The Guardian OpenPlatform")
## Project Setup
-  create a firebase project and enable firestore and authentication services
- for getting the api keys visit the given links above
- `git clone https://github.com/Junaid336/react-news-app.git`
- `cd react-news-app`
- create a `.env` file
- after getting the api keys and setting up firebase add the following environment variables
```javascript
VITE_API_KEY=             //for newsapi.org 
VITE_BASE_URL=         //for newsapi.org 
VITE_NYT_URL=          //for new york times api
VITE_NYT_API_KEY=   //for new york times api
VITE_GN_URL=           //for the guardian openplatform news api 
VITE_GN_API_KEY=     //for guardian openplatform news api
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```
- `npm install`
## Usage
- `npm run dev`
- visit `localhost:5173`
### Using Docker
- first make sure to install docker on your system
- then in the terminal run the following commands
- `docker build -t react-news-app .`
- `docker run -p 5173:5173 react-news-aggregator`
