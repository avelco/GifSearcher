import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifSearcherApp } from './GifSearcherApp.jsx';

import './styles.css';  // Import CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifSearcherApp />
  </React.StrictMode>,
)
