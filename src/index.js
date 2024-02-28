// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Import other dependencies
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import './style.scss';

// Render the application
ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Router>
      <App />
    </Router>
  );
