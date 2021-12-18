import { useSetRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { getBackgroundImages } from '@shared/services/api';
import { userBackgroundImage } from '@shared/atoms/userBackgroundImage';
import { Campus } from '@shared/services/api/types';
import { convertImageToDataUrl } from '@/Background/utils/convertImageToDataUrl';

const useBackgroundUpdateQuery = (campus: Campus | null) => {
  const setBackgroundImage = useSetRecoilState(userBackgroundImage);

  const { isFetching, isError } = useQuery({
    queryKey: ['background', `update-${campus}`],
    queryFn: async () => {
      const { data } = await getBackgroundImages(campus as Campus);

      const convertResult = {
        ...data,
        dayImageUrl: await convertImageToDataUrl(data.dayImageUrl),
        nightImageUrl: await convertImageToDataUrl(data.nightImageUrl),
      };

      setBackgroundImage((state) => ({
        ...state,
        value: convertResult,
      }));
      return convertResult;
    },
    cacheTime: 0,
    suspense: false,
    enabled: campus !== null,
  });

  return {
    isFetching,
    isError,
  };
};

export default useBackgroundUpdateQuery;
