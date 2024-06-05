import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Response Data:', data);

      if (response.ok) {
        const user = data.body; 
        dispatch(loginSuccess(user));
        localStorage.setItem('token', data.body.token);

        
      } else {
        dispatch(loginFailure(data.message));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};