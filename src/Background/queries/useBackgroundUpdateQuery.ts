import { useSetRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { Campus } from '@shared/services/api/types';
import { getBackgroundImages } from '@shared/services/api';
import { userBackgroundImage } from '@/Background/atoms';
import { convertImageToDataUrl } from '@/Background/utils/imageConvertingHelper';

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
    enabled: campus !== null,
  });

  return {
    isFetching,
    isError,
  };
};

export default useBackgroundUpdateQuery;
