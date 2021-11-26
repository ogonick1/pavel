import {
  SET_TOKEN,
  SET_PROFILE,
  SET_EMAIL,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_PASSWORD,
} from './actionTypes';

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setFirstName = (firstName) => ({
  type: SET_FIRSTNAME,
  payload: firstName,
});

export const setLastName = (lastName) => ({
  type: SET_LASTNAME,
  payload: lastName,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});