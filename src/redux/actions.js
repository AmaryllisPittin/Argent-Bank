import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
  PROFILE_UPDATE,
  PROFILE_UPDATE_FAIL,
} from './actionTypes';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
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
      console.log('Données de réponse :', data);

      if (response.ok) {
        dispatch(loginSuccess(data));
        dispatch(userProfile(data.body.token));
        localStorage.setItem('token', data.body.token);
      } else {
        dispatch(loginFailure(data.message));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const userProfile = (token) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Échec de la récupération du profil');
    }

    dispatch({ type: PROFILE_SUCCESS, payload: data.body });
  } catch (error) {
    dispatch(handleError(PROFILE_FAIL, error));
  }
};

export const updateProfile = (token, newFirstName, newLastName) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName: newFirstName, lastName: newLastName }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Échec de la mise à jour du profil');
    }

    dispatch(userProfileUpdate(data.body));
  } catch (error) {
    dispatch(handleError(PROFILE_UPDATE_FAIL, error));
  }
};

export const userProfileUpdate = (data) => ({
  type: PROFILE_UPDATE,
  payload: data,
});

const handleError = (type, error) => ({
  type,
  payload: error.message,
});
