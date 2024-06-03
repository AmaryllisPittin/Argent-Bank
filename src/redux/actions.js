export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_USER = 'SET_USER';

export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export function login(username, password) {
    return { type: LOGIN, payload: { username, password } };
}
  
  export function logout() {
    return { type: LOGOUT };
}