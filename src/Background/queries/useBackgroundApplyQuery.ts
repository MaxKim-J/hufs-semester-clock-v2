import { useQuery } from 'react-query';
import { getBackgroundImages } from '@shared/services/api';
import { useRecoilState } from 'recoil';
import { BackgroundImg } from '@shared/services/api/types';
import { userBackgroundImage } from '@/Background/atoms';
import { convertImageToDataUrl } from '@/Background/utils/imageConvertingHelper';

const useBackgroundApplyQuery = () => {
  const [{ status, value }, setBackgroundImage] =
    useRecoilState(userBackgroundImage);

  const { data: backgroundImgData } = useQuery<BackgroundImg>({
    queryKey: [
      'background',
      `apply-${status}${value !== null ? `-${value?.name}` : ''}`,
    ],
    queryFn: async () => {
      if (value !== null) return value;

      const { data } = await getBackgroundImages('seoul');

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
    suspense: true,
    enabled: status === 'initialized',
  });

  return backgroundImgData;
};

export default useBackgroundApplyQuery;