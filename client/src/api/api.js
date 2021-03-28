/* eslint-disable operator-linebreak */
import * as axios from 'axios';
import generateReqBody from './utils';

const userId = '6060e37e33b3c8001500ef3f';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjBlMzdlMzNiM2M4MDAxNTAwZWYzZiIsImlhdCI6MTYxNjk2MjQ1NSwiZXhwIjoxNjE2OTc2ODU1fQ.Sv1roL2te5DRUsWi9ZjvLsc5ldmGJEVhwX_8wE_WFEs';

export const updateSettings = async (optional, field, value) => {
  const reqBody = generateReqBody(optional, field, value);
  try {
    const { data } = await axios.put(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userId}/settings`,
      reqBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return data.optional;
  } catch (error) {
    return error;
  }
};

export const fetchSettings = async () => {
  try {
    const { data } = await axios.get(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userId}/settings`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return data;
  } catch (error) {
    return error;
  }
};
