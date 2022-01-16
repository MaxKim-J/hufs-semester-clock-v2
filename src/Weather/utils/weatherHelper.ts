const rangeWeatherEmojiTable: Record<string, string> = {
  '2': '🌩',
  '3': '🌦',
  '5': '🌧',
  '6': '🌨',
};

const exactWeatherEmojiTable: Record<string, string> = {
  '800': '☀️',
  '801': '☀️',
  '802': '⛅️',
  '803': '🌥',
  '804': '☁️',
  '701': '🌫',
  '721': '🌫',
  '741': '🌫',
  '731': '😷',
  '761': '😷',
  '781': '🌪',
};

export const convertWeatherEmoji = (weatherId: number) => {
  const id = String(weatherId);
  return rangeWeatherEmojiTable[id[0]] ?? exactWeatherEmojiTable[id] ?? '☀️';
};
