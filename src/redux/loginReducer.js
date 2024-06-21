import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes';

const initialState = {
  success: false,
  firstName: '', 
  lastName: '',
  userName: '',
  token: '',
  loading: false,
  error: null,
};

/*********Gestion des états de connexion***********/

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
      sessionStorage.setItem('token', token);
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
        userName: action.payload.userName,
      };
    case LOGOUT:
      console.log('User logged out in reducer.');
      sessionStorage.removeItem('token');
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default loginReducer;


