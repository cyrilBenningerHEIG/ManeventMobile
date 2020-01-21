# Manevent Mobile 
()
Manevent Mobile is a simple application written with [@ionic/angular](https://ionicframework.com/docs/angular/overview) framework which allows the following set of interactions : 

1. to add / modify / delete an event  
2. to add / modify / delete a user 
3. a real-time communication by an event between subscribed users 

## Requirements

* [Node.js](https://nodejs.org/) 12.x

## Usage

bash

git clone https://github.com/cyrilBenningerHEIG/ManeventMobile.git

cd ManeventMobile

npm install

ionic serve

The application starts at the PORT:8100 of your local server : [http://localhost:8100](http://localhost:8100).

If you want to use the application on smartphone, you should run the application in a developer mode. We are using a [Ionic DevApp](https://ionicframework.com/docs/appflow/devapp) utility for that. Use "ionic serve --devapp" instead of "ionic serve" and locate it on the Ionic Dev application [https://ionicframework.com/docs/appflow/devapp].

## User Guide

### All Events page 

The events page gathers all events organized by the app's users. Each event come with its informations. Filters make it easy to sort events by location or date. If you are login you'll be able to add news events to the list or use the "add button" to regroup your favorite events in "My events" 

### My events 

All events you added by clicking on an "add button" of an event will appear on this page. 

### Profil 

The profile section allows you to sign up and login to our app. Once you have logged in, you'll have access to all related to your profile information. You'll be able here to update or delete your account and log out if needed. You'll find below the events which you are admin of. Each event comes with an edit and delete button. 

### Event page

Each event has its own section in the app. You can access to a map showing your location end the event location by clicking on a location tag. Each events also comes with his personal chat where users can exchange messages. 
