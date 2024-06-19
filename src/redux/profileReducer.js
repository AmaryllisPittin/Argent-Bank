// profileReducer.js

import { PROFILE_SUCCESS, PROFILE_FAIL, PROFILE_RESET, PROFILE_UPDATE, PROFILE_UPDATE_FAIL } from './actionTypes';

const initialState = {
  success: false,
  firstName: '',
  lastName: '',
  userName: '',
  loading: false,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SUCCESS:
      const { firstName, lastName, userName } = action.payload.body;
      return { ...state, success: true, firstName, lastName, userName, loading: false, error: null };

    case PROFILE_UPDATE:
      return {
        ...state,
        success: true,
        firstName: action.payload.firstName || state.firstName,
        lastName: action.payload.lastName || state.lastName,
        userName: action.payload.userName || state.userName,
      };

    case PROFILE_UPDATE_FAIL:
      return { ...state, error: action.payload, loading: false };

    case PROFILE_FAIL:
      return { ...state, error: action.payload, loading: false };

    case PROFILE_RESET:
      return { ...initialState };

    default:
      return state;
  }
};

export default profileReducer;
