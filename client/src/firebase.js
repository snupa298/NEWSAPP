// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAar2VL8L1t1m815iFPMHOBJVyRczGDYig",
  authDomain: "assgfrontend.firebaseapp.com",
  projectId: "assgfrontend",
  storageBucket: "assgfrontend.appspot.com",
  messagingSenderId: "218794341570",
  appId: "1:218794341570:web:73ec8ea9899099ab90f75b",
  measurementId: "G-328V571ER5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };