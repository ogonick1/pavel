import { INCREMENT, DECREMENT, SET_VALUE } from './actionTypes';

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const setValue = (value) => ({
  type: SET_VALUE,
  payload: Number(value) || 0,
});