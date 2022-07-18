// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Others
import App from './components/app/app';
import { films } from './mocks/films';
import { store } from './store/store';

// Root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Render
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={films} />
    </Provider>
  </React.StrictMode>,
);
