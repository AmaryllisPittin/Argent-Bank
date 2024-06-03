import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './redux/store'; // Assurez-vous que l'importation est correcte
import './sass/mainStyle.scss';
import './sass/merging.scss';
import './sass/dimensions-and-spacing.scss';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

