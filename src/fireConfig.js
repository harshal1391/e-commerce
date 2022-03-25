
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBExzjgDdXLVnXvajeyywAx-SgMCwaq0io",
  authDomain: "e-commerce-529d0.firebaseapp.com",
  projectId: "e-commerce-529d0",
  storageBucket: "e-commerce-529d0.appspot.com",
  messagingSenderId: "747970453805",
  appId: "1:747970453805:web:6c125154dc24cfa88ef3a4",
  measurementId: "G-YM4CRMBP0L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

export default fireDB;
