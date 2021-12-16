import { useQuery } from 'react-query';
import { getBackgroundImages } from '@shared/services/api';
import { useRecoilState } from 'recoil';
import { userBackgroundImage } from '@shared/atoms/userBackgroundImage';
import convertBackgroundImagesToDataUrl from '@shared/utils/convertImageToDataUrl';
import getBackgroundByTime from '@shared/utils/getBackgroundByTime';

const useBackgroundInitializeQuery = () => {
  const [{ status, value }, setBackgroundImage] =
    useRecoilState(userBackgroundImage);

  const { data: backgroundImgData } = useQuery({
    queryKey: [
      'background',
      `initialize-${status}${value !== null ? `-${value?.campus}` : ''}`,
    ],
    queryFn: async () => {
      if (value !== null) {
        return getBackgroundByTime(value);
      }

      const { data } = await getBackgroundImages('seoul');
      const convertResult = await convertBackgroundImagesToDataUrl(data);

      setBackgroundImage((state) => ({
        ...state,
        value: convertResult,
      }));

      return getBackgroundByTime(convertResult);
    },
    enabled: status === 'initialized',
  });

  return backgroundImgData;
};

export default useBackgroundInitializeQuery;
