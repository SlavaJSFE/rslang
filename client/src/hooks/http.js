import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setError } from '../redux/user/actions';

export default function useHttp() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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
        throw new Error(data || 'Something went wrong');
      }

      setLoading(false);

      return data;
    } catch (err) {
      setLoading(false);
      dispatch(setError(err));
      throw err;
    }
  }, []);

  return {
    loading,
    request,
  };
}
