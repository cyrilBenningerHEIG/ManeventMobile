# Manevent Mobile 

Manevent Mobile is a simple application written on [ionic/angular] framework which allows the following set of interactions : 

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

If you want to use the application on smartphone, you should run the application in a developer mode. We are using a [Ionic DevApp] utility for that. Use "ionic serve --devapp" instead of "ionic start" and locate it on the Ionic Dev application [https://ionicframework.com/docs/appflow/devapp].

## User Guide

### All Events page 

The events page gathers all events organized by the app's users. Each event come with its informations. Filters make it easy to sort events by location or date. If you are login you'll be able to add news events to the list or use the "add button" to regroup your favorite events in "My events" 

### My events 

All events you created or added will be stored in this page. 

### Profil 

The profil section allows you to sign up and login to our app. Once you logged in, you'll have access to your profil and his infos. You'll be able here to update or delete your accound and log out if needed. Under that, you'll find the events of which you're admin. Each event comes with an edit and delete button. 

### Event page

Each event has it's own section on the app. There you'll access to a map showing you the event location and yours. Each events also comes with his personnal chat where users can exchange messages. 
