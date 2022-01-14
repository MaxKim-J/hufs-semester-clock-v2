import { AxiosResponse } from 'axios';
import axiosClient from '@shared/services/api/axiosClient';
import {
  Semesters,
  Weather,
  Corona,
  Notification,
  BackgroundImg,
  Campus,
  Admission,
} from './types';

export const getSemester = (): Promise<AxiosResponse<Semesters>> =>
  axiosClient.get('/semester');

export const getWeather = (): Promise<AxiosResponse<Weather[]>> =>
  axiosClient.get('/weather');

export const getCorona = (): Promise<AxiosResponse<Corona>> =>
  axiosClient.get('/corona');

export const getNotification = (): Promise<AxiosResponse<Notification[]>> =>
  axiosClient.get('/notification');

export const getAdmission = (): Promise<AxiosResponse<Admission[]>> =>
  axiosClient.get(`/admission`);

export const getBackgroundImages = (
  campus: Campus
): Promise<AxiosResponse<BackgroundImg>> =>
  axiosClient.get('/background', {
    params: {
      campus,
    },
  });

export const getImageBlob = (url: string): Promise<AxiosResponse<Blob>> =>
  axiosClient.get(url, { responseType: 'blob' });
