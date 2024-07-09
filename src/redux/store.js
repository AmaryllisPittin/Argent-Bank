import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;






