// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm207Z7dxiKZn66ihyOeIax6WZZgXEaOE",
  authDomain: "congtyadsv2.firebaseapp.com",
  projectId: "congtyadsv2",
  storageBucket: "congtyadsv2.appspot.com",
  messagingSenderId: "731796927330",
  appId: "1:731796927330:web:6b735cec41f4ab0403f23b",
  measurementId: "G-1V6TBBSMFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
