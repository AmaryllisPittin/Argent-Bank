import { SET_USERNAME } from '../actions/actions';

const initialState = {
  userName: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        userName: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
