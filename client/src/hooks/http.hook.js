import { useCallback, useState } from 'react';

export default function useHttp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    let jsonBody = body;
    setLoading(true);

    try {
      if (body) {
        jsonBody = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
      }

      const response = await fetch(url, {
        method,
        body: jsonBody,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setLoading(false);

      return data;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return {
    loading,
    request,
    error,
    clearError,
  };
}
