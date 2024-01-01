// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Constans from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constans.manifest.extra.apiKey ,
  authDomain: Constans.manifest.extra.authDomain ,
  projectId: Constans.manifest.extra.projectId ,
  storageBucket: Constans.manifest.extra.storageBucket ,
  messagingSenderId: Constans.manifest.extra.messagingSenderId ,
  appId: Constans.manifest.extra.appId , 
  databaseURL: Constans.manifest.extra.databaseURL 
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();