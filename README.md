# DeliverIt APP

##Install:

- Install dependencies
`npm install`

##Cordova Setup
- Install `ios-sim` and `ios-deploy` with 
    `npm install -g ios-sim`
    `brew install ios-deploy` 


##iOS development
https://ionicframework.com/docs/developing/ios
This guide covers how to run and debug Ionic apps on iOS simulators and devices using Capacitor or Cordova. iOS apps can only be developed on macOS with Xcode installed
There are two workflows for running Ionic apps on iOS:

- Running with Xcode
- Running with the Ionic CLI
The Xcode approach is generally more stable, but the Ionic CLI approach offers live-reload functionality.

##Xcode Setup
####Setting up a Development Team(DONE)
All iOS apps must be code signed, even for development. Luckily, Xcode makes this easy with automatic code signing. The only prerequisite is an Apple ID.

Open Xcode and navigate to Xcode » Preferences » Accounts. Add an Apple ID if none are listed. Once logged in, a Personal Team will appear in the team list of the Apple ID.
####Creating an iOS Simulator
The iOS simulator emulates iOS devices on Macs. The following documentation is a quick way to get the iOS simulator set up. For more information, see Apple's documentation.

Open Xcode and navigate to Window » Devices and Simulators. Create an iPhone 11 simulator if one does not already exist.


##Cordova Setup
Additional setup is required for Cordova to support programmatic builds.This section is not necessary for Capacitor.

`ios-sim` & `ios-deploy`
The ios-sim and ios-deploy are utilities that deploy apps to the iOS simulator and iOS devices during development. They can be installed globally with npm.


##Project Setup

1. Generate the native project, if it does not already exist.
- For Capacitor, run the following: `ionic cordova prepare ios`
- For Cordova, run the following: `ionic cordova prepare ios`
- React templates, Capacitor is better
- Angular templates, Cordova works


2. Set the Package ID
- For Capacitor, open the capacitor.config.json file and modify the appId property.
- For Cordova, open the config.xml file and modify the id attribute of the root element, `<widget>`. See the Cordova documentation for more information.

3. Open the project in Xcode
- For Capacitor, run the following to open the app in Xcode:
`ionic capacitor open ios`
- For Cordova, open Xcode. Use File » Open and locate the app. Open the app's platforms/ios directory.


##Live-reload with Cordova

- For Cordova run `ionic cordova run ios -l --external` you may also need `npm i -g native-run`
