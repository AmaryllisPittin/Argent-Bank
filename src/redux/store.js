import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;




