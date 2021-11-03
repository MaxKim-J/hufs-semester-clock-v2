import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  Semester,
  Weather,
  Corona,
  Notification,
  BackgroundImages,
} from './types';

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

class ApiClient {
  static getSemester(): Promise<AxiosResponse<Semester>> {
    return axiosClient.get('/semester');
  }

  static getWeather(): Promise<AxiosResponse<Weather[]>> {
    return axiosClient.get('/weather');
  }

  static getCorona(): Promise<AxiosResponse<Corona>> {
    return axiosClient.get('/corona');
  }

  static getNotification(): Promise<AxiosResponse<Notification[]>> {
    return axiosClient.get('/notification');
  }

  static getBackground(params: {
    campus: 'seoul' | 'global' | 'error';
  }): Promise<AxiosResponse<BackgroundImages>> {
    const { campus } = params;
    return axiosClient.get('/background', {
      params: { campus },
    });
  }
}

export default ApiClient;
