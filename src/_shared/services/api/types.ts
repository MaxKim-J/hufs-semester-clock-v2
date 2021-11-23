/* eslint-disable camelcase */

type SemesterAct = '종강' | '개강';
type SemesterKey = 'current' | 'next' | 'seasonal';
export type SemesterValue = {
  act: SemesterAct;
  due: string;
  id: string;
};

export type Semester = Record<SemesterKey, SemesterValue>;

export type Weather = {
  afternoon_icon: string;
  date: string;
  id: number;
  morning_icon: string;
  regional: 'seoul' | 'global';
  weatherId: number;
};

type CoronaDataPerCity = {
  rate: number;
  region: string;
};

type CoronaDataPerDate = {
  rate: number;
  day: string;
};

export type Corona = {
  city: CoronaDataPerCity[];
  total: CoronaDataPerDate[];
  cityTimeStatus: string;
};

export type Notification = {
  date: string;
  id: number;
  link: string;
  title: string;
};
