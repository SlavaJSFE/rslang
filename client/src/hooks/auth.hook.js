import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/user/actions';

const storageName = 'userData';

export default function useAuth() {
  const dispatch = useDispatch();

  const login = useCallback((user) => {
    localStorage.setItem(storageName, JSON.stringify({
      token: user.token,
      refreshToken: user.refreshToken,
      userId: user.userId,
      name: user.name,
      avatar: user.avatar,
    }));
    dispatch(setUser(user));
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(storageName));

    if (user && user.token) {
      login(user);
    }
  }, [login]);

  return {
    login,
    logout,
  };
}
