import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import { SelectInput, TextInput } from '@components/fundamentals/Input';
import { Admission } from '@shared/services/api/types';
import { Text } from '@components/fundamentals/Text';
import Button from '@components/fundamentals/Button';
import useAdmissionQuery from '@/UserInfo/queries/useAdmissionQuery';
import useUserInfoInputs from '@/UserInfo/hooks/useUserInfoInputs';

function UserInfoInput() {
  const admissions = useAdmissionQuery();

  const { admissionInput, nameInput, isAllInputsValid, submitInput } =
    useUserInfoInputs();

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
          size="size16"
          maxLength={20}
          widthFigure={12}
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
