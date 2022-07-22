import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKxDDn0FZWCs-ZYHtfFQoz1ESK5dgD_sI",
  authDomain: "francis-30cf8.firebaseapp.com",
  projectId: "francis-30cf8",
  storageBucket: "francis-30cf8.appspot.com",
  messagingSenderId: "352993796110",
  appId: "1:352993796110:web:1b250fa15295e14fb71c5f"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
