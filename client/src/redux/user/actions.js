import { LOGOUT, SET_LOADING, SET_USER, UNSET_LOADING } from './constants';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const unsetLoading = () => ({
  type: UNSET_LOADING,
});
