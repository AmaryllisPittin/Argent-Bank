import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});


