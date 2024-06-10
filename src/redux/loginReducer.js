import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes';

const initialState = {
  success: false,
  firstName: '', 
  lastName: '',
  token: '',
  loading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      console.log('Login Success Payload:', action.payload);
      const { token } = action.payload.body;
      localStorage.setItem('token', token);
      return {
        ...state,
        success: true,
        loading: false,
        error: null,
        token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
