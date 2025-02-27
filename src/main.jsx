

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App.jsx';

// application du thème stocké dans localStorage dès le chargement
document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") || "light");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
