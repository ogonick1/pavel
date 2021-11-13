import { INCREMENT, DECREMENT, SET_VALUE } from './actionTypes';

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case SET_VALUE: {
      return {
        ...state,
        value: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
