// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhZf8CEbI_q82aGdYf4OL1T1q43YHHCL8",
    authDomain: "reviews-c5d57.firebaseapp.com",
    projectId: "reviews-c5d57",
    storageBucket: "reviews-c5d57.firebasestorage.app",
    messagingSenderId: "223036945480",
    appId: "1:223036945480:web:315b4e9e7c7fa1a824547d",
    measurementId: "G-5E64MWD0GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);




