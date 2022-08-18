// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBkuNkyaj266pq0PxXC3DwXGO6Xam9QuFk",

  authDomain: "gurumauli-f3d41.firebaseapp.com",

  projectId: "gurumauli-f3d41",

  storageBucket: "gurumauli-f3d41.appspot.com",

  messagingSenderId: "337215682795",

  appId: "1:337215682795:web:5554270f2346c15bbce6ae",

  measurementId: "G-DCNMXX30C1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);