import { SET_PROFILE, SET_TOKEN } from './actionTypes';

const initialState = {
  token: null,
  profile: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
