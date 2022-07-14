// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

// Mocks
import { films } from './mocks/films';

// Root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Render
root.render(
  <React.StrictMode>
    <App films={films} />
  </React.StrictMode>,
);
