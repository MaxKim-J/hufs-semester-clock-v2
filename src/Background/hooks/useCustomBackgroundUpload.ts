import { useState, ChangeEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { userBackgroundImage } from '@shared/atoms/userBackgroundImage';
import { convertBlobToDataUrl } from '@/Background/utils/convertImageToDataUrl';

const useCustomBackgroundUpload = () => {
  const setBackgroundImage = useSetRecoilState(userBackgroundImage);
  const [status, setStatus] = useState({
    isLoading: false,
    isError: false,
    errorMessage: '',
  });

  const uploadBackgroundImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setStatus((state) => ({ ...state, isLoading: true, isError: false }));
      const file = e.target.files[0];
      try {
        // TODO: Jpeg, Png 구분
        if (file.size > 3_000_000) {
          setStatus((state) => ({
            ...state,
            errorMessage: '파일 용량 초과',
            isError: true,
          }));
          return;
        }

        const dataURL = await convertBlobToDataUrl(file);

        setBackgroundImage((state) => ({
          ...state,
          value: {
            name: file.name,
            dayImageUrl: dataURL,
            nightImageUrl: dataURL,
          },
        }));
      } catch (error: unknown) {
        setStatus((state) => ({
          ...state,
          isError: true,
          errorMessage: '업로드 실패',
        }));
      } finally {
        setStatus((state) => ({ ...state, isLoading: false }));
      }
    }
  };

  return {
    status,
    uploadBackgroundImage,
  };
};

export default useCustomBackgroundUpload;
