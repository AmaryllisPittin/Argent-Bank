import { LOGIN, LOGOUT } from './actions';

const initialState = {
  users: [
    {
        username: `Tony Stark`,
        email: `tony@stark.com`,
        password: `password123`
        
    },
    {
        username: `Steve Rogers`,
        email: `steve@rogers.com`,
        password: `password456`
    },
  ],
  currentUser: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      const user = state.users.find(
        user => user.username === action.payload.username && user.password === action.payload.password
      );
      if (user) {
        return {
          ...state,
          currentUser: user,
        };
      } else {
        return {
          ...state,
          currentUser: null,
        };
      }
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
}

export default rootReducer;



