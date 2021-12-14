/* eslint-disable camelcase */

export interface SemesterValue {
  act: '종강' | '개강';
  due: string;
  id: string;
}

export interface Semester {
  current: SemesterValue;
  next: SemesterValue;
  season: SemesterValue;
}

export interface Weather {
  afternoon_icon: string;
  date: string;
  id: number;
  morning_icon: string;
  regional: 'seoul' | 'global';
  weatherId: number;
}

interface CoronaPerCity {
  rate: number;
  region: string;
}

interface CoronaPerDate {
  rate: number;
  day: string;
}

export interface Corona {
  city: CoronaPerCity[];
  total: CoronaPerDate[];
  cityTimeStatus: string;
}

export interface Notification {
  date: string;
  id: number;
  link: string;
  title: string;
}

export type Campus = 'seoul' | 'global';

export interface BackgroundImg {
  dayImageUrl: string;
  nightImageUrl: string;
}
