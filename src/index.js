import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const currentPath = window.location.pathname;
if (currentPath.endsWith('/') && currentPath !== '/' && currentPath !== '/react-portfolio/') {
  window.history.replaceState(null, '', currentPath.slice(0, -1));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
