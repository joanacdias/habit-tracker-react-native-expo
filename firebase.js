// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWqUBUb7bWzQKwg_nBOZaVkJsklaKEqQc",
  authDomain: "habit-tracker-750f2.firebaseapp.com",
  projectId: "habit-tracker-750f2",
  storageBucket: "habit-tracker-750f2.appspot.com",
  messagingSenderId: "776641075985",
  appId: "1:776641075985:web:38d680821889c8745f0ab0",
  measurementId: "G-XQSYRLT8RP"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    const app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };