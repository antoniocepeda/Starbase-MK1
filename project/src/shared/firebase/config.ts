import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQpgKLvHw6h0bD0gaSsElRVKi9wRffYUM",
  authDomain: "starbase-mk1.firebaseapp.com",
  projectId: "starbase-mk1",
  storageBucket: "starbase-mk1.appspot.com",
  messagingSenderId: "987220574787",
  appId: "1:987220574787:web:abcdef1234567890" // You'll need to get the actual appId from Firebase console
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
