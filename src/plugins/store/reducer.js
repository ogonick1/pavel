import {
  SET_PROFILE,
  SET_TOKEN,
  SET_EMAIL,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_PASSWORD,
} from './actionTypes';

const initialState = {
  token: null,
  profile: null,
  email: null,
  firstName: null,
  lastName: null,
  password: null,
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
  case SET_EMAIL: {
    return {
      ...state,
      email: action.payload,
    };
  }
  case SET_FIRSTNAME: {
    return {
      ...state,
      firstName: action.payload,
    };
  }
  case SET_LASTNAME: {
    return {
      ...state,
      lastName: action.payload,
    };
  }
  case SET_PASSWORD: {
    return {
      ...state,
      password: action.payload,
    };
  }
  default:
    return state;
  }
};

export default reducer;
