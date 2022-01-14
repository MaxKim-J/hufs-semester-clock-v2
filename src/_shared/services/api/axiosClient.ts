import axios, { AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

export default axiosClient;
