// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRvCHwE62rW9SlqtbtmBWXv832xHG6kjs",
  authDomain: "ampere-profile.firebaseapp.com",
  databaseURL: "https://ampere-profile-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ampere-profile",
  storageBucket: "ampere-profile.appspot.com",
  messagingSenderId: "69243449326",
  appId: "1:69243449326:web:a55db200914a4751ada8ff",
  measurementId: "G-E6R86LYPJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)