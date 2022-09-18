// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAySm2U49tLZGVJOczaDjOjQydqsdVy9vg",
  authDomain: "lealuve-57ef4.firebaseapp.com",
  projectId: "lealuve-57ef4",
  storageBucket: "lealuve-57ef4.appspot.com",
  messagingSenderId: "95010190499",
  appId: "1:95010190499:web:e77b93672664e8719dfb16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)