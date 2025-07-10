// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Cl3Lfy0Bv5R2T25Gb8oEkdra1msEBp0",
  authDomain: "sistema-prototipado.firebaseapp.com",
  projectId: "sistema-prototipado",
  storageBucket: "sistema-prototipado.firebasestorage.app",
  messagingSenderId: "111524843430",
  appId: "1:111524843430:web:18d6322ad318d120444967",
  measurementId: "G-DJX2W4N8YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);