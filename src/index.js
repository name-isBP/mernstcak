import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: for global styles
import App from './App'; // Assuming you have an App.js file
import reportWebVitals from './reportWebVitals'; // Optional: if you're tracking performance

// Render the App component to the root DOM element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: Measure performance
reportWebVitals();
