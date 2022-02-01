import { useQuery } from 'react-query';
import { getBackgroundImages } from '@shared/services/api';
import { useRecoilState } from 'recoil';
import { BackgroundImg } from '@shared/services/api/types';
import { userBackgroundImage } from '@/Background/atoms';
import { convertImageToDataUrl } from '@/Background/utils/imageConvertingHelper';

const useBackgroundApplyQuery = () => {
  const [{ value }, setBackgroundImage] = useRecoilState(userBackgroundImage);

  const { data: backgroundImgData } = useQuery<BackgroundImg>({
    queryKey: ['background', `apply-${value?.name ?? 'seoul'}`],
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
  });

  return backgroundImgData;
};

export default useBackgroundApplyQuery;
