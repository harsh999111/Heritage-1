// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNcaHPcMcBGCmoHr4GFVCN34KtCVo9vkA",
  authDomain: "heritage-8f5ce.firebaseapp.com",
  projectId: "heritage-8f5ce",
  storageBucket: "heritage-8f5ce.appspot.com",
  messagingSenderId: "244122475198",
  appId: "1:244122475198:web:aca6bb06cef9eaad1ddcef",
  measurementId: "G-1DNKC0K3ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

