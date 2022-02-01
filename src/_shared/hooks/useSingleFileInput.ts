import { useState, ChangeEvent } from 'react';

type FileInputValidators = {
  validFunction: (file: File) => boolean;
  errorMessage: string;
};

type UseSingleFileInputOptions = {
  onChange: (file: File) => void;
  validators: FileInputValidators[];
};

const useSingleFileInput = ({
  onChange,
  validators,
}: UseSingleFileInputOptions) => {
  const [status, setStatus] = useState({
    isLoading: false,
    isError: false,
    errorMessage: '',
  });

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
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
        onChange(file);
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
    handleChange,
  };
};

export default useSingleFileInput;
