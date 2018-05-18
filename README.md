# City Information Aggregator

(a.k.a. react_rails_api_city_data)

This is one of my first few React projects. It was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and it consumes a separate [Rails API Integrator API](https://github.com/lortza/rails_api_integrator) app that I built.


## Features

- Enter a US city location and get information on local
  * Weather via [weatherunderground](https://www.wunderground.com/weather/api/d/docs?d=index) & [GeoDB](http://geodb-city-api.wirefreethought.com/docs/guides/getting-started/test-drive)
  * Related Articles via [New York Times](https://developer.nytimes.com/)
  * Photos via [flickr photo search](https://www.flickr.com/services/api/)
  * Upcoming Events via [Eventful](http://api.eventful.com/docs)
- Autocomplete in location field
- Spinny wheel while you wait for API results
- Toggle between weather results for nearby cities and major cities

## Tech Features

- Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
- Uses vanilla React for rendering components
- Bootstrap 4
- Uses [Create React App's SASS precompiler](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
- Uses [Google Places API](https://developers.google.com/places/web-service/intro) for location autocomplete
- Data comes from [this Rails API](https://github.com/lortza/rails_api_integrator)

## Getting Started

- Fork and clone or download the [Rails API Integrator API](https://github.com/lortza/rails_api_integrator) which is the data this app consumes.
- Set up and run a postgres db
- Start the Rails API server with `rails s` and browse to `localhost:3001`
- Fork and clone or download this repo
- Start this server with `npm serve` and browse to `locahost:3000`
- Run the SASS preprocessor `npm run watch-css`


## Tour of the App

![Alt text](/public/images/readme_screenshot.jpg?raw=true "Home Page")


### Architecture

The architecture of the app components looks like this:

```
App.js
 - ReportForm
   - LocationSearchInput
 - Report
   - ReportHeader
   - Weather
     - LocationWeather
   - Events
     - Event
   - Articles
     - Article
   - Photos
     - Photo

```

The majority of the functions live in the `App.js` component. This is where the location setting and calls to the Rails API happen. The API calls use `fetch` and promises.

```js
// src/components/App.js

getReportData = (inputLocation) => {
  const {stateLoc, cityLoc} = inputLocation

  this.setState({isFetching: true})
  fetch(`${this.state.baseUrl}/${stateLoc}/${cityLoc}`, {
    headers:
      {
        'Accept': 'application/json',
        'Credentials': 'same-origin'
      }
  })
    .then(function(response){
      console.log({response})
      if(!response.ok){
        throw new Error(`Response Not OK: ${response.status} ${response.statusText}`)
      }
      return response.json()
    })
    .then((json) => {
      this.setState({
        reportData: json.data.attributes,
        isFetching: false
      })
    })
    .catch(function(err){
      console.log(err)
    })
}
```

Report data is sent via the `Report` component...

```
// src/components/App.js

{reportData ? <Report data={reportData} cityLoc={cityLoc} stateLoc={stateLoc}/> : ""}
```

... and trickles down to the other components via props from there.
```html
// src/components/Report.js

<ReportHeader cityLoc={cityLoc} stateLoc={stateLoc}/>

{ area_weather ? <Weather data={area_weather}/> : <p>There is no Weather Information for the {cityLoc}, {stateLoc} area.</p> }

{ events ? <Events data={events}/> : <p>There are no Events in {cityLoc}, {stateLoc} in the next 30 days.</p> }

{ photos ? <Photos data={photos}/> : <p>Oh darn. There are no Photos tagged with {cityLoc}, {stateLoc}.</p> }

{ articles ? <Articles data={articles}/> : <p>There are no Articles on the topic of {cityLoc}, {stateLoc}.</p> }
```
