export const addProtocol = (url: string) =>
  /^http/.test(url) ? url : `https://${url}`;
