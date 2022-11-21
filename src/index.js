import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCueLldZDL0vjBAOqkV-5zb3PJtMFNFVGg",
  authDomain: "cart-a5430.firebaseapp.com",
  projectId: "cart-a5430",
  storageBucket: "cart-a5430.appspot.com",
  messagingSenderId: "543404450800",
  appId: "1:543404450800:web:9203aeaf7a7488ed2bf335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

