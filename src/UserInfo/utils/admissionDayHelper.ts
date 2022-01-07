import { getNow } from '@shared/utils/timeHelper';

export const getAdmissionInterval = (admissionNum: string) => {
  const intervalMs = +getNow() - +getAdmissionDate(admissionNum);
  return Math.floor(intervalMs / (1000 * 60 * 60 * 24));
};

const getAdmissionDate = (admissionNum: string) =>
  new Date(`20${admissionNum}-03-02`);
