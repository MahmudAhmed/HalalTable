# HalalTable
***

## Description
<p align="center">
  <img width="600" height="500" src="https://github.com/MahmudAhmed/HalalTable/blob/master/app/assets/images/halaltable-preview.gif">
</p>
HalalTable is a single page app inspired by OpenTable, which allows users to search for halal restaurants in the five boroughs of NYC, make reservations, save specific restaurants, and leave reviews. This app was built with Ruby on Rails and PostgreSQL for the backend and React, Redux for the frontend.

## Technologies
* Backend: Ruby on Rails/PostgreSQL
* Frontend: JavaScript/React/Redux
* HTML5/SCSS
* Webpack
* Google Maps Api
* Amazon Web Services S3

## Installation 

### Pre-requisites

Postgres Database is required for HalalTables to operate correctly.

### Setting up
Please run the following commands:
```
bundle install
npm install
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed
```

### Running the app
Please run the following commands in separate tabs:
```
rails s
npm run webpack
```

## HalalTable Features

* User Authentication
  * Passwords authenticated and protected via BCrypt hashing functionality
  * Certain application features restricted to logged-in users
  * Demo account to test application without registration of an account

<p align="center">
  <img width="400" height="300" src="https://github.com/MahmudAhmed/HalalTable/blob/master/app/assets/images/auth.gif">
</p>

* Restaurants and Search
  * Restaurants can be searched by either price, ratings, location, or cuisine. Additionally, the index page can be toggled to a map that allows filtering based on the zoom of the map

<p align="center">
  <img width="600" height="500" src="https://github.com/MahmudAhmed/HalalTable/blob/master/app/assets/images/map-search.gif">
</p>


  ```
    this.map.addListener('idle', () => {
      const bounds = this.map.getBounds();
      const southWest = bounds.getSouthWest();
      const northEast = bounds.getNorthEast();
      this.sendBounds(southWest, northEast);
    });

  ```
  ```
  sendBounds(sw, ne) {
    const bounds = {
      "northEast": { "lat": ne.lat(), "lng": ne.lng() },
      "southWest": { "lat": sw.lat(), "lng": sw.lng() }
    }
    this.props.requestRestaurants({bounds})
  }
  ```

  ```
  def self.in_bounds(bounds)
    ne_lat = bounds[:northEast][:lat].to_f
    ne_lng = bounds[:northEast][:lng].to_f
    sw_lat = bounds[:southWest][:lat].to_f
    sw_lng = bounds[:southWest][:lng].to_f

    Restaurant.where("lat between ? AND ? AND lng between ? AND ?", sw_lat, ne_lat,sw_lng, ne_lng)
  end
  ```

* Reservations
  * Logged in users are able to create a reservation for a future date
  * Users are able to access their reservations in their profile, available in the dropdown of the navigational bar when the users are logged in
  * Users are able to cancel/edit existing reservations that have not already occurred

<p align="center">
  <img width="500" height="400" src="https://github.com/MahmudAhmed/HalalTable/blob/master/app/assets/images/reservation.gif">
</p>

* Reviews
  * Users are able to write & update reviews for restaurants once they are logged in
  * The review form can be accessed either on the restaurant's page or next to the user's past reservations in their profile
  * Each Restaurant shows an overall rating that updates as an average of all existing reviews
  * Each Restaurant shows a list of all existing reviews

<p align="center">
  <img width="600" height="500" src="https://github.com/MahmudAhmed/HalalTable/blob/master/app/assets/images/review.gif">
</p>

* Favorite/Save
  * Users can save restaurants that they are interested in for booking in the future.
  * These restaurants are stored in their profiles.

  
* Optimized Map Search
  <p align="center" >
    <img width="600" height="500" src="https://github.com/MahmudAhmed/HalalTable/blob/master/app/assets/images/cquery.gif">
  </p>
  
* Optimized Show Page
  <p align="center" >
    <img width="600" height="500" src="https://github.com/MahmudAhmed/HalalTable/blob/master/app/assets/images/cquery2.gif">
  </p>

## Future Endeavors

* Optamize show page for mobile. 
* A more built out photo gallary for restaurants show page. 
* Include reservation functionality from search page. 
* More functional InfoWindow for Google Maps Api. 
* Allow restaurant owners to be able to add their restaurants to HalalTables. 
