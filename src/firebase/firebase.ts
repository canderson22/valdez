// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpKg7-EwznBU1OjX3NxS0ngmcM5yBbRnM",
  authDomain: "el-artista-6b29a.firebaseapp.com",
  projectId: "el-artista-6b29a",
  storageBucket: "el-artista-6b29a.appspot.com",
  messagingSenderId: "254892764123",
  appId: "1:254892764123:web:2f9fa8706808ad691a15fe",
  measurementId: "G-QYHGJLL1ZD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
