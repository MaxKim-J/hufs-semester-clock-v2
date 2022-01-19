import useInput from '@shared/hooks/useInput';
import { useRecoilState } from 'recoil';
import { userInfo } from '@/UserInfo/atoms';

const useUserInfoInputs = () => {
  const [{ value: userInfoValue }, setUserInfo] = useRecoilState(userInfo);

  const admissionInput = useInput({
    name: 'admission',
    initialValue: userInfoValue === null ? '' : userInfoValue.admission,
    validators: [
      {
        validFunction: (text: string) => !!text,
        errorMessage: '학번을 입력해 주세요.',
      },
    ],
  });

  const nameInput = useInput({
    name: 'name',
    initialValue: userInfoValue === null ? '' : userInfoValue.name,
    validators: [
      {
        validFunction: (text: string) => !!text,
        errorMessage: '이름을 입력해 주세요.',
      },
    ],
  });

  const isAllInputsValid = [nameInput, admissionInput].every(
    (input) => !input.isError
  );

  const submitInput = () => {
    if (isAllInputsValid) {
      setUserInfo((state) => ({
        ...state,
        value: {
          name: nameInput.value,
          admission: admissionInput.value,
        },
      }));
    }
  };

  return {
    isAllInputsValid,
    submitInput,
    admissionInput,
    nameInput,
  };
};

export default useUserInfoInputs;
