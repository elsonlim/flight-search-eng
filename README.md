# Flight Search Engine
To view, filter Flight details
Search criterial include, departing location, destination, date, number of passengers and price per pax.

# Web Application
This application is hosted and can be easily accessed via the link below, bypassing the installation process.

// some hosted link

As the application is hosted on heroku's free tier, the first load will take longer as the instance needs to be spun up. It will be available until the end of May.

# To Run Application

## Installation
Requires Node.js and npm to be installed.

https://nodejs.org/en/download/

After installing node, go to the root folder and run:
```
$ npm install
```

## Usage
```
$ npm start
```

## Documentation
To generate documentation:
```
$ npm run gendocs
```
To open documentation:
```
$ npm run opendocs
```
To generation and open documentation:
```
$ npm run docs
```

## Unit Test
To run tests:
```
$ npm test
```

## Create Data
To create dummy data for viewing purposes:
```
$ npm run create-flights
```

# Application Design and Assumptions
1. Dummy data only includes 6 country and 7 airlines, 2 Airlines from Japan.

2. A airline with flight to a destination will have a returning flight

3. return flight can be from other airlines.

4. Expect backend to return valid return data(i.e. return time on same day shouldn't be before arriving the destination), is not handled in this App. 

5. With Dummy data, dates are not taken into consideration, everyday have the same flights. 

6. selection of flight is not handled in this app. 
