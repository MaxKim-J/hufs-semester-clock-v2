import { Text } from '@components/fundamentals/Text';
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import Button from '@components/fundamentals/Button';
import { formatNumber } from '@shared/utils/formatHelper';
import { getGreetingMessage } from '@/UserInfo/utils/greetingHelper';
import { UserInfo, userInfo } from '@/UserInfo/atoms';
import { getAdmissionInterval } from '@/UserInfo/utils/admissionDayHelper';

type UserInfoDisplayArticleProps = {
  changeSection: () => void;
};

function UserInfoDisplayArticle({
  changeSection,
}: UserInfoDisplayArticleProps) {
  const { value: userInfoValue } = useRecoilValue(userInfo);
  const { admission, name } = userInfoValue as UserInfo;

  return (
    <article css={articleStyle}>
      <Text size="size24">
        {admission}학번 외대 입학{' '}
        {formatNumber(getAdmissionInterval(admission))}일째
      </Text>
      <Text size="size24">
        {name}님, {getGreetingMessage()}
      </Text>
      <Button type="button" size="size12" onClick={changeSection}>
        학번 이름 바꾸기
      </Button>
    </article>
  );
}

const articleStyle = css`
  text-align: center;
  height: 90px;
`;

export default UserInfoDisplayArticle;
