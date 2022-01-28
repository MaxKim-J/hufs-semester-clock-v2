import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import Spacer from '@components/fundamentals/Spacer';
import { SelectInput, TextInput } from '@components/fundamentals/Input';
import useInput from '@shared/hooks/useInput';
import { Admission } from '@shared/services/api/types';
import { Text } from '@components/fundamentals/Text';
import Button from '@components/fundamentals/Button';
import useAdmissionQuery from '@/UserInfo/queries/useAdmissionQuery';
import { userInfo } from '@/UserInfo/atoms';

function UserInfoInput() {
  const admissions = useAdmissionQuery();

  const [{ value: userInfoValue }, setUserInfo] = useRecoilState(userInfo);

  const admissionInput = useInput<HTMLSelectElement>({
    name: 'admission',
    initialValue: userInfoValue === null ? '' : userInfoValue.admission,
    validators: [
      {
        validFunction: (text: string) => !!text,
        errorMessage: '학번을 입력해 주세요.',
      },
    ],
  });

  const nameInput = useInput<HTMLInputElement>({
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

  return (
    <div>
      <Text size="size14">
        학번과 이름을 입력하시면 입학한지 며칠 째인지 볼 수 있어요!
      </Text>
      <Spacer height="size8" />
      <div css={inputWrapperStyle}>
        <TextInput
          placeholder="이름"
          value={nameInput.value}
          fontSize="size16"
          maxLength={20}
          figureWidth={12}
          title="이름 입력"
          onChange={nameInput.handleInput}
        />
        <SelectInput
          items={admissions as Admission[]}
          defaultValue={admissionInput.value}
          title="학번 선택"
          onChange={admissionInput.handleInput}
        />
        <Button
          type="submit"
          size="size14"
          onClick={submitInput}
          css={buttonStyle}
          disabled={!isAllInputsValid}
        >
          저장하기
        </Button>
      </div>
    </div>
  );
}

const inputWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const buttonStyle = css`
  margin: 0 0.5rem;
`;

export default UserInfoInput;
