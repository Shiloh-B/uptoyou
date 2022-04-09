import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import firebaseConfig from './fire';
import { initializeApp } from 'firebase/app';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<App />);

initializeApp(firebaseConfig);
