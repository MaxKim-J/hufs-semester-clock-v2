import { useState, ChangeEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { userBackgroundImage } from '@shared/atoms/userBackgroundImage';
import { convertBlobToDataUrl } from '@/Background/utils/convertImageToDataUrl';

type FileInputValidators = {
  validFunction: (file: File) => boolean;
  errorMessage: string;
};

const useSingleFileInput = (validators: FileInputValidators[]) => {
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
        for (let i = 0; i < validators.length; i += 1) {
          const { validFunction, errorMessage } = validators[i];
          if (!validFunction(file)) {
            setStatus((state) => ({ ...state, errorMessage, isError: true }));
            e.target.files = null;
            return;
          }
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

export default useSingleFileInput;
