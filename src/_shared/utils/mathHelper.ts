export const getRandomArrayIndex = (length: number) =>
  Math.floor(Math.random() * length);

export const getRandomString = () => Math.random().toString(36).substr(2, 11);
