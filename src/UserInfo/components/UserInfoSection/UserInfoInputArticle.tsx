import { ChangeEvent, useState, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import { SelectInput, TextInput } from '@components/fundamentals/Input';
import { Admission } from '@shared/services/api/types';
import { Text } from '@components/fundamentals/Text';
import Button from '@components/fundamentals/Button';
import useAdmissionQuery from '@/UserInfo/queries/useAdmissionQuery';
import { userInfo } from '@/UserInfo/atoms';

type UserInfoInputArticleProps = {
  changeSection: () => void;
};

function UserInfoInputArticle({ changeSection }: UserInfoInputArticleProps) {
  const admissions = useAdmissionQuery();
  const setUserInfo = useSetRecoilState(userInfo);
  const [nameInput, setNameInput] = useState('');
  const [admissionInput, setAdmissionInput] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setAdmissionInput(e.target.value);
  };

  const submitInput = () => {
    setUserInfo((state) => ({
      ...state,
      value: {
        name: nameInput,
        admission: admissionInput,
      },
    }));
  };

  return (
    <article css={inputArticleStyle}>
      <Text>학번과 이름을 입력하시면 입학한지 며칠 째인지 볼 수 있어요!</Text>
      <Spacer height="size8" />
      <form>
        <div css={inputWrapperStyle}>
          <TextInput
            placeholder="이름"
            value={nameInput}
            size="size16"
            maxLength={20}
            widthFigure={11}
            title="이름 입력"
            onChange={handleInput}
          />
          <SelectInput
            items={admissions as Admission[]}
            title="학번 선택"
            onChange={handleSelect}
          />
        </div>
        <Spacer height="size8" />
        <div css={buttonWrapperStyle}>
          <Button
            type="submit"
            size="size14"
            onClick={submitInput}
            css={buttonStyle}
          >
            입력하기
          </Button>
          <Button
            type="submit"
            size="size14"
            onClick={changeSection}
            css={buttonStyle}
          >
            뒤로가기
          </Button>
        </div>
      </form>
    </article>
  );
}

const inputArticleStyle = css`
  height: 90px;
`;

const inputWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 18rem;
  margin: 0 auto;
`;

const buttonWrapperStyle = css`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const buttonStyle = css`
  margin: 0 0.5rem;
`;

export default UserInfoInputArticle;
