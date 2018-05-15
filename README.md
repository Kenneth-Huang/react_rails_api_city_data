# City Information Report

(a.k.a. react_rails_api_city_data)

This is a practice React app built to consume the [Rails API Integrator API](https://github.com/lortza/rails_api_integrator)

This is one of my first few React projects and does not use Redux

## Features

- Enter a US city location and get information on local
  * Weather via [weatherunderground](https://www.wunderground.com/weather/api/d/docs?d=index) & [GeoDB](http://geodb-city-api.wirefreethought.com/docs/guides/getting-started/test-drive)
  * Related Articles via [New York Times](https://developer.nytimes.com/)
  * Photos via [flickr photo search](https://www.flickr.com/services/api/)
  * Upcoming Events via [Eventful](http://api.eventful.com/docs)
- Uses [Google Places API](https://developers.google.com/places/web-service/intro) for location entry
- Spinny wheel while you wait for API results
- Uses vanilla React for rendering components

## Getting Started

- Fork and clone or download the [Rails API Integrator API](https://github.com/lortza/rails_api_integrator) which is the data this app consumes.
- Set up a postgres db
- Start that server with `rails s` and browse to `localhost:3001`
- Fork and clone or download this repo
- Start this server with `npm serve` and browse to `locahost:3000`


## Tour of the App

![Alt text](/public/images/readme_screenshot.jpg?raw=true "Home Page")

