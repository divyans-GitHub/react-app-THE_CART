import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6NrN0HoBCOIhPsqh4vkcZsRTTxJcYi1s",
  authDomain: "the-cart-9619a.firebaseapp.com",
  projectId: "the-cart-9619a",
  storageBucket: "the-cart-9619a.appspot.com",
  messagingSenderId: "29624543698",
  appId: "1:29624543698:web:251785f179d2642aeb400b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
