// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyClpbYxh43PoRznv1UettOmd7tTCebOa8g",
    authDomain: "firstproject-cf6b2.firebaseapp.com",
    projectId: "firstproject-cf6b2",
    storageBucket: "firstproject-cf6b2.firebasestorage.app",
    messagingSenderId: "747154489030",
    appId: "1:747154489030:web:09d5d96df444cdb472a1c7",
    measurementId: "G-ZBZ6L1HBP5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };



