# My Fitness Tracker

A full stack application that allows users to create new workouts, add exercises to these workouts and then keep session records for each exercise each time they complete a workout. Users can keep track of their progress and see their improvement over time.

A dynamic color scheme has been used to show progress since the last session:

- Red = worsened performance
- Yellow = same performance
- Green = improved performance

The metrics are ordered in level of importance (in terms of for performance) from left to right.
I.e. an improvement in lifting weight will result in the entire session row turning green.

![Home Page View Screenshot](/Readme-screenshot-2.png?raw=true "Home Page View")

## Getting Started

Please follow the steps in this order to get started with this project on your own device:

1.) Run "npm install"

2.) Create a .env file with your database credentials in the root folder. The .env file should have the following structure:

DB_USER="postgres"
DB_PASSWORD="your local password"
DB_PORT=5432
DB_HOST="localhost"
DB_NAME="your local database"

3.) To start the client side move into the "my-fitness-tracker" directory and run "npm run start"

4.) To start the server side run "npm run server"

5.) If you wish to populate the app with data, run "npm run populate"

## Tech Stack

### Front End

- HTML5 & CSS3
- JavaScript
- React
- Tailwind CSS
- React IcoMoon (For icons)

### Back End

- Express (server)
- Postgres (database)
- Sequelize (ORM - Object Relational Mapping)
