import useSingleFileInput from '@shared/hooks/useFileInput';

const useCustomBackgroundUpload = () => {
  const LIMIT_FILE_SIZE = 3_000_000;
  const ALLOW_FILE_REGEX = /^.*\.(png|jpeg|jpg)/;

  const fileInputHooks = useSingleFileInput([
    {
      validFunction: (file) => file.size <= LIMIT_FILE_SIZE,
      errorMessage: '파일 용량이 초과되었어요!',
    },
    {
      validFunction: (file) => ALLOW_FILE_REGEX.test(file.name),
      errorMessage: 'JPG, PNG만 가능해요!',
    },
  ]);

  return {
    ...fileInputHooks,
  };
};

export default useCustomBackgroundUpload;
