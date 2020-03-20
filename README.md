# HalalTable
***

## Description

HalalTable is a single page app inspired by OpenTable, which allows users to search for halal restaurants in the five boroughs of NYC, make reservations and save specific restaurants as they wish. This app was built with Ruby on Rails for the backend and React-Redux for the frontend, using PostgreSQL to manage the database.

## Technologies
* Backend: Ruby on Rails/PostgreSQL
* Frontend: JavaScript/React/Redux
* Google Maps Api
* AWS S3

## Installation 
***

### Pre-requisites

Postgres Database is required for OpenKitchen to operate correctly.

### Setting up
Please run the following commands:
`
bundle install
npm install
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed
`

### Running the app
Please run the following commands in separate tabs:
`
rails s
npm start
`



## Key Features
* User authentication from frontend to backend ensures that the privacy of personal site use history is secured.
* Users can use a demo log in to test out the site.