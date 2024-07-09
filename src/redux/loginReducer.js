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
      const { token } = action.payload.body;
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
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default loginReducer;


