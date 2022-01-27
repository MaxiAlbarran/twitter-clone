import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBNednWRLdjfABfU4vipUjLhLrCw8YNhGU",
  authDomain: "twitter-clone-76340.firebaseapp.com",
  projectId: "twitter-clone-76340",
  storageBucket: "twitter-clone-76340.appspot.com",
  messagingSenderId: "232012962023",
  appId: "1:232012962023:web:c5b3ff4e1ee71d9180ea42",
  measurementId: "G-59WN02R7J3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;