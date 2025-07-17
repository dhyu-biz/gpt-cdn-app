// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// index.js (iframe 내부 진입점)
const query = new URLSearchParams(window.location.search);
const color = query.get("color"); // red
const userId = query.get("userId"); // 123
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App color={color} userId={userId}/>);
