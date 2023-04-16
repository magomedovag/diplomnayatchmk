// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTyZdWaWK65iP0cC4yRd9j_RtweORQA04",
    authDomain: "diplom-56c90.firebaseapp.com",
    projectId: "diplom-56c90",
    storageBucket: "diplom-56c90.appspot.com",
    messagingSenderId: "1005784581384",
    appId: "1:1005784581384:web:96ef092eb9c5ecc4ba58bd",
    measurementId: "G-7XJ019TKDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);