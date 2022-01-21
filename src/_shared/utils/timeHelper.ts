export const getNow = () => new Date();

export const getDaysFromTimestamp = (timestamp: number) =>
  Math.floor(timestamp / (1000 * 60 * 60 * 24));

export const getHoursFromTimestamp = (timestamp: number) =>
  Math.floor((timestamp / (1000 * 60 * 60)) % 24);

export const getMinutesFromTimestamp = (timestamp: number) =>
  Math.floor((timestamp / (1000 * 60)) % 60);

export const getSecondsFromTimestamp = (timestamp: number) =>
  Math.floor((timestamp / 1000) % 60);
