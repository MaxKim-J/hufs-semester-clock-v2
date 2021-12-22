import { BackgroundImg } from '@shared/services/api/types';

const getBackgroundByTime = (backgroundImage: BackgroundImg, time: Date) => {
  const isDayTime = time.getHours() > 5 && time.getHours() < 18;
  return backgroundImage[isDayTime ? 'dayImageUrl' : 'nightImageUrl'];
};

export default getBackgroundByTime;
