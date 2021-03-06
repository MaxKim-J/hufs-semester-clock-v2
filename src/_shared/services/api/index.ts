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
  FeedbackResponse,
} from './types';

export const getSemester = (): Promise<AxiosResponse<Semesters>> =>
  axiosClient.get('/semester');

export const getWeather = (): Promise<AxiosResponse<{ weather: Weather[] }>> =>
  axiosClient.get('/weather');

export const getCorona = (): Promise<AxiosResponse<Corona>> =>
  axiosClient.get('/corona');

export const getNotification = (): Promise<
  AxiosResponse<{ notifications: Notification[] }>
> => axiosClient.get('/notification');

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

export const postFeedback = (
  feedback: string
): Promise<AxiosResponse<FeedbackResponse>> =>
  axiosClient.post('/feedback', { feedback });
