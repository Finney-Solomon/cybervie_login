// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZRviITkxojVW4NiB9tck0IpSjYuT6M9c",
  authDomain: "cybervie-fc1cf.firebaseapp.com",
  projectId: "cybervie-fc1cf",
  storageBucket: "cybervie-fc1cf.appspot.com",
  messagingSenderId: "611939100577",
  appId: "1:611939100577:web:814c8a79972cf9a6fe0de0",
  measurementId: "G-YTN6V9MWXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);