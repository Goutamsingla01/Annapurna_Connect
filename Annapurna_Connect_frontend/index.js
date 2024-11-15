import React from 'react';
import ReactDOM from 'react-dom';
import './src/index.css';
import App from './src/App';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)

