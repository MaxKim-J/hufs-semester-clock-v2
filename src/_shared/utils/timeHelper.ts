export const getNow = () => new Date();

export const getDaysFromMs = (ms: number) =>
  Math.floor(ms / (1000 * 60 * 60 * 24));

export const getHoursFromMs = (ms: number) =>
  Math.floor((ms / (1000 * 60 * 60)) % 24);

export const getMinutesFromMs = (ms: number) =>
  Math.floor((ms / (1000 * 60)) % 60);

export const getSecondsFromMs = (ms: number) => Math.floor((ms / 1000) % 60);
