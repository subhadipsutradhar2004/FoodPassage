// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "foodpassage-2facf.firebaseapp.com",
  projectId: "foodpassage-2facf",
  storageBucket: "foodpassage-2facf.firebasestorage.app",
  messagingSenderId: "469560852253",
  appId: "1:469560852253:web:40ded15e0e4f6761b12bf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}