import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// Your web app's Firebase configuration firebaseConfig goes here
// Copy the firebaseConfig object from your Firebase project settings
const firebaseConfig = {
  apiKey: 'AIzaSyCoO2HsTsH5HCttkThCGji-jXpBWjmInPo',
  authDomain: 'practice-users.firebaseapp.com',
  projectId: 'practice-users',
  storageBucket: 'practice-users.firebasestorage.app',
  messagingSenderId: '737173097374',
  appId: '1:737173097374:web:2718c586c0e049c924e48f',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
