export const getRandomArrayIndex = (length: number) =>
  Math.floor(Math.random() * length);

export const getRandomString = () => Math.random().toString(36).slice(2, 12);
