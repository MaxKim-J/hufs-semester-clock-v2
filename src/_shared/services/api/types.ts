/* eslint-disable camelcase */

export type SemesterType = 'current' | 'next' | 'seasonal' | 'nextCurrent';

export interface SemesterValue {
  id: SemesterType;
  act: '종강' | '개강';
  due: string;
  title: string;
}

export interface Semesters {
  current: SemesterValue;
  next: SemesterValue;
  seasonal: SemesterValue;
  nextCurrent: SemesterValue;
}

export interface Admission {
  key: number;
  value: string;
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
  name: string;
  dayImageUrl: string;
  nightImageUrl: string;
}
