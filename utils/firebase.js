// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhAlgg_KFIXFkn_8aF-rgItZFCIm9Kzx0",
  authDomain: "postify-d26b7.firebaseapp.com",
  projectId: "postify-d26b7",
  storageBucket: "postify-d26b7.appspot.com",
  messagingSenderId: "405840554362",
  appId: "1:405840554362:web:da2a632249192d304e0ec3",
  measurementId: "G-HEBEQPHLXC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
