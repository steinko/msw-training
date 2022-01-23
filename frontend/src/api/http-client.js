import axios from 'axios';

export const baseUrl = process.env.REACT_APP_BACKEND_URL +'/api';

export const httpClient = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});
