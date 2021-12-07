# artistAPI

This is a coding test API where you can make a request to an endpoint to fetch artist by name given. We are using [Last.fm's API](https://www.last.fm/api/show/artist.search) for it;

## Installation

```bash
$ npm i
```

## Usage

```bash
$ npm start
```

## Directory structure

### Overview

```
src/
├─ controllers/
│  └─ artist.js
├─ routes/
│  ├─ api/
│  │  ├─ v1/
│  │  │  └─ artist.js
├─ utils/
│  ├─ common.js
│  └─ mockArtistData.json
└─ app.js
```

### src/controllers/

This is where all the logic of the application is defined.

### src/routes/

This is where all the routes and routing-related things are defined.

### src/utils/

This is where a collection of util functions is defined.

## Routes

`baseUrl` for the application is `/api/v1`. So the absolute url is `http://localhost:3000/api/v1`

```
GET    baseUrl/artist/:artist_name/:file_name
```

## Last FM API

### Routes

```
GET    http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=API_KEY&format=json
```

### Sample Response

`P.S. The response in the documentation is incorrect. They have changed the response but have not changed the API documentation on their website.`

```json
{
  "results": {
    "opensearch:Query": {
        "#text": "",
        "role": "request",
        "searchTerms": "cher",
        "startPage": "1"
    },
    "opensearch:totalResults": "71254",
    "opensearch:startIndex": "0",
    "opensearch:itemsPerPage": "30",
    "artistmatches": {
      "artist": [
        {
          "name": "Cher",
          "listeners": "1326539",
          "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          "url": "https://www.last.fm/music/Cher",
          "streamable": "0",
          "image": [
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "extralarge"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "mega"
            }
          ]
        },
        {
          "name": "Cheryl Cole",
          "listeners": "631447",
          "mbid": "2d499150-1c42-4ffb-a90c-1cc635519d33",
          "url": "https://www.last.fm/music/Cheryl+Cole",
          "streamable": "0",
          "image": [
              {
                  "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                  "size": "small"
              },
              {
                  "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                  "size": "medium"
              },
              {
                  "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                  "size": "large"
              },
              {
                  "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                  "size": "extralarge"
              },
              {
                  "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                  "size": "mega"
              }
            ]
          },
          {
            "name": "Cher Lloyd",
            "listeners": "648368",
            "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
            "url": "https://www.last.fm/music/Cher+Lloyd",
            "streamable": "0",
            "image": [
              {
                  "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                  "size": "small"
              },
              {
                  "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                  "size": "medium"
              },
              {
                  "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                  "size": "large"
              },
              {
                  "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                  "size": "extralarge"
              },
              {
                  "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                  "size": "mega"
              }
            ]
          },
          {
          "name": "Black Stone Cherry",
          "listeners": "366581",
          "mbid": "1801bd47-46ae-49ff-bfcd-6e01b562d880",
          "url": "https://www.last.fm/music/Black+Stone+Cherry",
          "streamable": "0",
          "image": [
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "extralarge"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                "size": "mega"
            }
          ]
        }
      ]
    }
  }
}
```
