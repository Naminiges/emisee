// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH6rg4F05sG8tVrAm1W5AVH-ngaJvoa1M",
  authDomain: "latihan-6ee85.firebaseapp.com",
  projectId: "latihan-6ee85",
  storageBucket: "latihan-6ee85.appspot.com",
  messagingSenderId: "219694420584",
  appId: "1:219694420584:web:9d0acada99ed54d19561dd",
  measurementId: "G-Q1X053741J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const signIn = signInWithEmailAndPassword;
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);