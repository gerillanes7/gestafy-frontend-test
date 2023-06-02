import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || "http://localhost:4000"
});

const setAuthToken = token => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete api.defaults.headers.common['x-auth-token'];
  }
};

api.interceptors.request.use(req => {
  req.headers = {
    ...req.headers,
    'Content-Type': 'application/json',
    'x-auth-token': localStorage.getItem('token') ?? null
  };

  return req;
});

export { api, setAuthToken };
