import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

// Récupérer le jeton du sessionStorage
const token = sessionStorage.getItem('token');

const initialState = {
  userLogin: {
    token: token || '',
    success: !!token,
    loading: false,
    error: null,
  },
};

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;





