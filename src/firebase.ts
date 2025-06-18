// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD53UAejYubtfIR_12w8tfCPXjVafhRzFI",
  authDomain: "inflame-pos.firebaseapp.com",
  projectId: "inflame-pos",
  storageBucket: "inflame-pos.firebasestorage.app",
  messagingSenderId: "903728558107",
  appId: "1:903728558107:web:3e2f4dca53ca1be3cdc8be",
  measurementId: "G-VDBKKCCTXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);