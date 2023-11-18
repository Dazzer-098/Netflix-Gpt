// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcm0HcKC_gN-VvAMReKusE142u8JQkELQ",
  authDomain: "netflixgpt-clone.firebaseapp.com",
  projectId: "netflixgpt-clone",
  storageBucket: "netflixgpt-clone.appspot.com",
  messagingSenderId: "723834182279",
  appId: "1:723834182279:web:417fa7d8332aaa58b33622",
  measurementId: "G-0FK8XXHFTH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
