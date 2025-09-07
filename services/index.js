// API versiyonunu environment variable'dan al, varsayılan v1
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || 'v1';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.epinko.com/api';

const BASE_URL = `${API_BASE_URL}/${API_VERSION}`;

export const fetchData = async (
  url,
  method = 'GET',
  body = null,
  headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Accept-Language': 'tr',
  }
) => {
  const options = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(`${BASE_URL}${url}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, message: errorData.message };
    }

    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getData = (url, headers) => {
  return fetchData(url, 'GET', null, headers);
};

export const postData = (url, body, headers) => {
  return fetchData(url, 'POST', body, headers);
};

export const putData = (url, body, headers) => {
  return fetchData(url, 'PUT', body, headers);
};

export const patchData = (url, body, headers) => {
  return fetchData(url, 'PATCH', body, headers);
};

export const deleteData = (url, headers) => {
  return fetchData(url, 'DELETE', null, headers);
};

// API bilgilerini export et
export const apiConfig = {
  version: API_VERSION,
  baseUrl: API_BASE_URL,
  fullUrl: BASE_URL,
};
