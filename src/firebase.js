import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBNednWRLdjfABfU4vipUjLhLrCw8YNhGU",
  authDomain: "twitter-clone-76340.firebaseapp.com",
  projectId: "twitter-clone-76340",
  storageBucket: "twitter-clone-76340.appspot.com",
  messagingSenderId: "232012962023",
  appId: "1:232012962023:web:c5b3ff4e1ee71d9180ea42",
  measurementId: "G-59WN02R7J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


