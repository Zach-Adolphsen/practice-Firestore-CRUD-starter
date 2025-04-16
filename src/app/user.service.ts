import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // This service is for CRUD operations on users
  // It uses AngularFire for Firestore operations
  // It uses RxJS for observables

  // Injecting Firestore service from AngularFire
  // Firestore is a NoSQL database from Firebase
  private firestore = inject(Firestore);
  private userCollection = collection(this.firestore, 'users');

  // It uses AngularFire's collection function to get a reference to the users collection
  getUsers(): Observable<User[]> {
    return collectionData(this.userCollection, { idField: 'id' }) as Observable<
      User[]
    >;
  }

  // It uses AngularFire's collectionData function to get the data from the users collection
  // It uses RxJS's Observable to return the data as an observable

  // It uses AngularFire's setDoc function to add a new user to the users collection
  // It uses AngularFire's doc function to get a reference to the new user document

  addUser(newUser: User) {
    const userRef = doc(this.firestore, `users/${newUser.id}`);
    newUser.id = userRef.id;
    setDoc(userRef, newUser);
  }

  // It uses AngularFire's updateDoc function to update an existing user in the users collection
  // It uses AngularFire's doc function to get a reference to the user document
  updateUser(user: User) {
    const userRef = doc(this.firestore, `users/${user.id}`);
    updateDoc(userRef, { ...user });
  }

  // It uses AngularFire's deleteDoc function to delete a user from the users collection
  // It uses AngularFire's doc function to get a reference to the user document
  deleteUser(id: string) {
    const userRef = doc(this.firestore, `users/${id}`);
    deleteDoc(userRef);
  }
}
