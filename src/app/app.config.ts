import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';



// Your web app's Firebase configuration firebaseConfig goes here
// Copy the firebaseConfig object from your Firebase project settings
// const firebaseConfig = { ...... }


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
  
  ]
};
