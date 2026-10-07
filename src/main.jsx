import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { createAppStore } from './store.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={createAppStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
);
