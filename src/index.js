import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<App />);


const firebaseConfig = {
  apiKey: "AIzaSyCKG3GFiYG6uKvnBPQZp1_-Nsf43e8OgXA",
  authDomain: "uptoyou-8178a.firebaseapp.com",
  projectId: "uptoyou-8178a",
  storageBucket: "uptoyou-8178a.appspot.com",
  messagingSenderId: "216250209210",
  appId: "1:216250209210:web:b03bebf27ed36c758e8383",
  measurementId: "G-FRYWLCQYKE"
};

initializeApp(firebaseConfig);
