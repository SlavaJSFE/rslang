import {
  LOGOUT,
  SET_USER,
  SET_MESSAGE,
  SET_ERROR,
} from './constants';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const reduxLogout = () => ({
  type: LOGOUT,
});

export const setMessage = (text) => ({
  type: SET_MESSAGE,
  payload: text,
});

export const setError = (text) => ({
  type: SET_ERROR,
  payload: text,
});
