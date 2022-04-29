// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCmVLLAxyrlDOz6UpFJRXvfs1fxP7Z0ePY",
  authDomain: "react-museum-22.firebaseapp.com",
  projectId: "react-museum-22",
  storageBucket: "react-museum-22.appspot.com",
  messagingSenderId: "837019438771",
  appId: "1:837019438771:web:71bc48c47234b01634aac6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db }