// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Constans from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFvgvx0lKh7uWk4RU9VDYUYKUIT3R214A",
  authDomain: "chatapp-572fc.firebaseapp.com",
  projectId: "chatapp-572fc",
  storageBucket: "chatapp-572fc.appspot.com",
  messagingSenderId: "1046800509907",
  appId: "1:1046800509907:web:da748878a3c0a14fb69d26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore();