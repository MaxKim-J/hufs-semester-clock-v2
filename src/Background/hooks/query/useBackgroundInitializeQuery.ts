import { useQuery } from 'react-query';
import { getBackgroundImages } from '@shared/services/api';
import { useRecoilState } from 'recoil';
import { userBackgroundImgInfo } from '@shared/atoms';
import convertBackgroundImagesToDataUrl from '@shared/utils/convertImageToDataUrl';
import getBackgroundByTime from '@shared/utils/getBackgroundByTime';

const useBackgroundInitializeQuery = () => {
  const [{ status, value }, setBackgroundImageInfo] = useRecoilState(
    userBackgroundImgInfo
  );

  const { data: backgroundImgData } = useQuery({
    queryKey: ['background', `initialize-${status}`],
    queryFn: async () => {
      if (value !== null) {
        return getBackgroundByTime(value);
      }

      const { data } = await getBackgroundImages('seoul');
      const convertResult = await convertBackgroundImagesToDataUrl(data);

      setBackgroundImageInfo({
        status,
        value: convertResult,
      });

      return getBackgroundByTime(convertResult);
    },
    enabled: status === 'initialized',
    staleTime: 10000,
  });

  return backgroundImgData;
};

export default useBackgroundInitializeQuery;
