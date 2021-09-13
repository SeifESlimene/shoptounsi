// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFQ-0Dwpt2ZY6hGo0pA2F4kR2lv4B1K7w",
  authDomain: "shoptounsi-cdc94.firebaseapp.com",
  projectId: "shoptounsi-cdc94",
  storageBucket: "shoptounsi-cdc94.appspot.com",
  messagingSenderId: "1050803922088",
  appId: "1:1050803922088:web:639375dde6d13dc1a08e9d",
  measurementId: "G-JMWGF8HG6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);