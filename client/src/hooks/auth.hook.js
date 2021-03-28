import { useCallback, useEffect, useState } from 'react';

const storageName = 'usedData';

export default function useAuth() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(storageName, JSON.stringify({ token: jwtToken, userId: id }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(token, userId);
    }
  }, [login, token, userId]);

  return {
    login,
    logout,
    token,
    userId,
  };
}
