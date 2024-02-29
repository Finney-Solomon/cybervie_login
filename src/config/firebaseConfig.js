// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCZRviITkxojVW4NiB9tck0IpSjYuT6M9c",
  authDomain: "cybervie-fc1cf.firebaseapp.com",
  projectId: "cybervie-fc1cf",
  storageBucket: "cybervie-fc1cf.appspot.com",
  messagingSenderId: "611939100577",
  appId: "1:611939100577:web:814c8a79972cf9a6fe0de0",
  measurementId: "G-YTN6V9MWXT"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);