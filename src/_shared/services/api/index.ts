import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Semester, Weather, Corona, Notification } from './types';

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

export const getSemester = (): Promise<AxiosResponse<Semester>> =>
  axiosClient.get('/semester');

export const getWeather = (): Promise<AxiosResponse<Weather[]>> =>
  axiosClient.get('/weather');

export const getCorona = (): Promise<AxiosResponse<Corona>> =>
  axiosClient.get('/corona');

export const getNotification = (): Promise<AxiosResponse<Notification[]>> =>
  axiosClient.get('/notification');
