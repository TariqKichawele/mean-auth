// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-auth-50911.firebaseapp.com",
  projectId: "mern-auth-50911",
  storageBucket: "mern-auth-50911.appspot.com",
  messagingSenderId: "71734376366",
  appId: "1:71734376366:web:e08ac8b9577bc6fd723a3f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);