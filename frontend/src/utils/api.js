import config from './config';

const headers = { 'Content-Type': 'application/json' };

export const computeScore = async (payload) => {
  const response = await fetch(
    `${config.apiUrl}/${config.endpoints.computeScore}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    }
  );
  return await response.json();
};
