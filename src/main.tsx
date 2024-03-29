import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/global.scss';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
