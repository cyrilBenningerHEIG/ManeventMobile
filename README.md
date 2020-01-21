# Manevent Mobile 

Manevent Mobile is a simple application written with [@ionic/angular](https://ionicframework.com/docs/angular/overview) framework. Manevent Mobile allows the following set of interactions : 

1. to add / modify / delete an event  
2. to add / modify / delete a user 
3. a real-time communication by an event between subscribed users 

## Requirements

* [Node.js](https://nodejs.org/) 12.x

## Usage

```
bash

git clone https://github.com/cyrilBenningerHEIG/ManeventMobile.git

cd ManeventMobile

npm install

ionic serve
```  

The application starts at the PORT:8100 of your local server : [http://localhost:8100](http://localhost:8100).

If you want to use the application on a smartphone, you should run it in developer mode. We are using a [Ionic DevApp](https://ionicframework.com/docs/appflow/devapp) utility for that. Use `ionic serve --devapp` instead of `ionic serve` and open it in the Ionic Dev application [https://ionicframework.com/docs/appflow/devapp].

## User Guide

### All Events page 

The events page displays all available events. Each event consists of a title, date and time when the event will take place, a location, an image and a description. Filters allow sorting the events by location or date. Once logged in, you can post new events to the general event list or add your favorite events to "My events" list.

### My events 

All events you added by clicking the "add button" of the event will appear on this page. 

### Profile 

The profile section allows you to sign up and login to our app. Once logged in, you have access to all your profile information. From the profile page you can update and delete your account. You can also log out if needed. You will find the events which you are admin of below. Each event comes with an edit and delete button. 

### Event page

Each event has its own section in the app. You can access a map showing your and event location by clicking on the location tag. Each event also comes with its own chat where users can exchange messages. 
