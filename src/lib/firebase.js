// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFW6RoQd2QkUHzGUlh2Cw0U9RmmWYHhfI",
  authDomain: "heritage-3b668.firebaseapp.com",
  projectId: "heritage-3b668",
  storageBucket: "heritage-3b668.appspot.com",
  messagingSenderId: "334937633581",
  appId: "1:334937633581:web:0010a50396159969d699a4",
  measurementId: "G-V0YVPWCTLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)