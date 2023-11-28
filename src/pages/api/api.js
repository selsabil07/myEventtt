// utils/api.js

import { getAccessToken } from './auth';

export const fetchWithAuth = async (url, options = {}) => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    // Handle the case where the user is not authenticated
    throw new Error('User not authenticated');
  }

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    // Handle the case where the API request fails
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
};
