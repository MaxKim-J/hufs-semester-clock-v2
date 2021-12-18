import { BackgroundImg } from '@shared/services/api/types';

const getBackgroundByTime = (backgroundImage: BackgroundImg) => {
  const currentTime = new Date();
  const isNightTime = currentTime.getHours() < 18 && currentTime.getHours() > 5;
  return backgroundImage[isNightTime ? 'dayImageUrl' : 'nightImageUrl'];
};

export default getBackgroundByTime;
