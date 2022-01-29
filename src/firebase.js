import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAp9Ob_fAT5CAZZU7EYLrD8FvyNKnHKTEg',
  authDomain: 'twitter-clone2-7816e.firebaseapp.com',
  projectId: 'twitter-clone2-7816e',
  storageBucket: 'twitter-clone2-7816e.appspot.com',
  messagingSenderId: '611523507867',
  appId: '1:611523507867:web:eaf4516100eeebe3c8383e',
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
