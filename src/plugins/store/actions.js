import {
  SET_TOKEN,
  SET_PROFILE,
} from './actionTypes';

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});
