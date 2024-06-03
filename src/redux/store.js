import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Utilisation de l'importation nommée
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;



