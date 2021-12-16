import { BackgroundImg } from '@shared/services/api/types';

const getBackgroundByTime = (backgroundImage: BackgroundImg) =>
  backgroundImage[new Date().getHours() < 18 ? 'dayImageUrl' : 'nightImageUrl'];

export default getBackgroundByTime;
