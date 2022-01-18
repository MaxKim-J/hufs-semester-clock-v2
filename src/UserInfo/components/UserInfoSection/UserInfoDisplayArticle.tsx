import { Text } from '@components/fundamentals/Text';
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { formatNumber } from '@shared/utils/formatHelper';
import { getGreetingMessage } from '@/UserInfo/utils/greetingHelper';
import { userInfo } from '@/UserInfo/atoms';
import {
  getAdmissionInterval,
  getAdmissionByDate,
} from '@/UserInfo/utils/admissionDayHelper';
import { motion } from 'framer-motion';
import { fadeInAndOut } from '@style/animation';

function UserInfoDisplayArticle() {
  const { value: userInfoValue } = useRecoilValue(userInfo);

  const userAdmission =
    userInfoValue === null ? getAdmissionByDate() : userInfoValue.admission;

  return (
    <article css={articleStyle}>
      <Text size="size24">
        {userAdmission}학번 외대 입학{' '}
        {formatNumber(getAdmissionInterval(userAdmission))}일째
      </Text>
      <Text size="size24">
        {userInfoValue === null ? '학우' : userInfoValue.name}님,{' '}
        {getGreetingMessage()}
      </Text>
    </article>
  );
}

const articleStyle = css`
  text-align: center;
`;

export default UserInfoDisplayArticle;
