// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f9c72.firebaseapp.com",
  projectId: "mern-estate-f9c72",
  storageBucket: "mern-estate-f9c72.appspot.com",
  messagingSenderId: "878904465629",
  appId: "1:878904465629:web:f5cb0a21ca184b94516334"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);