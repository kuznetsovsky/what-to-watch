// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Others
import App from './components/app/app';
import { store } from './store/store';

// Root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Render
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
