import getBackgroundByTime from '@/Background/utils/getBackgroundByTime';
import { BackgroundImg } from '@/_shared/services/api/types';

describe('UNIT: getBackgroundByTime 함수는 BackgroundImg 객체에서 현재 시간에 적합한 이미지를 선택한다', () => {
  const backgroundImage: BackgroundImg = {
    name: 'bgImg',
    dayImageUrl: 'dayImageUrl',
    nightImageUrl: 'nightImageUrl',
  };

  const time = new Date(2021, 12, 21);

  it('오전 6시일때 낮 이미지(dayImageUrl)가 선택된다', () => {
    time.setHours(6);
    expect(getBackgroundByTime(backgroundImage, time)).toEqual(
      backgroundImage.dayImageUrl
    );
  });

  it('오후 3시일때 낮 이미지(dayImageUrl)가 선택된다', () => {
    time.setHours(15);
    expect(getBackgroundByTime(backgroundImage, time)).toEqual(
      backgroundImage.dayImageUrl
    );
  });

  it('오전 5시일때 밤 이미지(nightImageUrl)가 선택된다', () => {
    time.setHours(5);
    expect(getBackgroundByTime(backgroundImage, time)).toEqual(
      backgroundImage.nightImageUrl
    );
  });

  it('오후 6시일때 밤 이미지(nightImageUrl)가 선택된다', () => {
    time.setHours(18);
    expect(getBackgroundByTime(backgroundImage, time)).toEqual(
      backgroundImage.nightImageUrl
    );
  });

  it('오후 10시일때 밤 이미지(nightImageUrl)가 선택된다', () => {
    time.setHours(22);
    expect(getBackgroundByTime(backgroundImage, time)).toEqual(
      backgroundImage.nightImageUrl
    );
  });
});
