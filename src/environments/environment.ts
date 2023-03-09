// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyDA4lXF9ovASyWV2OwBKPgPu8fmmukNpBE",
    authDomain: "comesano-cy.firebaseapp.com",
    //databaseURL: "YOUR_DATABASE_URL",
    projectId: "comesano-cy",
    storageBucket: "comesano-cy.appspot.com",
    messagingSenderId: "460202587220"
  },

  recaptcha:{
    sitekey:'6LeuHFgkAAAAAJEtPMGMhPzY2d5z9SHJqe7V6pIn'
  }
  
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
}