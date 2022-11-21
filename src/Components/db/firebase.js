// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7oAe3uz8iKV1v4PlFwptRi615emLfUmU",
  authDomain: "logic-portfolio.firebaseapp.com",
  projectId: "logic-portfolio",
  storageBucket: "logic-portfolio.appspot.com",
  messagingSenderId: "906528295148",
  appId: "1:906528295148:web:511b6101ac8ba3e54a3dc9",
  measurementId: "G-XYFVFFM5VR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseDb = getFirestore(app);
