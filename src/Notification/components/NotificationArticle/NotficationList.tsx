import { Notification } from '@shared/services/api/types';
import { Link, Text } from '@components/fundamentals/Text';
import { m } from 'framer-motion';
import Spacer from '@components/fundamentals/Spacer';
import { css } from '@emotion/react';
import Button from '@components/fundamentals/Button';
import { fadeInAndOut } from '@style/animation';
import { transparentTable } from '@style/variables';
import useNotificationQuery from '@/Notification/queries/useNotificationQuery';
import useNotificationSlice from '@/Notification/hooks/useNotificationSlice';
import { getNotificationString } from '@/Notification/utils/notificationHelper';

function NotificationList() {
  const notifications = useNotificationQuery() as Notification[];

  const { index, increaseIndex, decreaseIndex, sliceNotifications } =
    useNotificationSlice({
      notiPerIndex: 5,
      notiLength: notifications.length,
    });

  return (
    <m.div {...fadeInAndOut}>
      <Spacer />
      <Text size="size12" color="darkGray">
        최신 학사공지 15개를 보여드립니다.
      </Text>
      <Spacer />
      <ol css={notificationListStyle}>
        <Spacer />
        {sliceNotifications(notifications).map((notification) => (
          <li css={notificationStyle} key={notification.id}>
            <Spacer height="size4" />
            <Link color="black" href={notification.link} target="_blank">
              <Text color="black" size="size12">
                {getNotificationString(notification)}
              </Text>
            </Link>
            <Spacer height="size4" />
          </li>
        ))}
        <Spacer />
      </ol>
      <Spacer />
      <div css={buttonWrapperStyle}>
        <Button size="size12" color="black" onClick={decreaseIndex}>
          이전
        </Button>
        <Text
          size="size12"
          color="black"
          role="alert"
          aria-live="polite"
          aria-label={`${index + 1}번째 목록`}
        >
          {index + 1}
        </Text>
        <Button size="size12" color="black" onClick={increaseIndex}>
          다음
        </Button>
      </div>
    </m.div>
  );
}

const notificationListStyle = css`
  padding: 0 2rem;
  border-radius: 1rem;
  background-color: ${transparentTable.white70};
`;

const notificationStyle = css`
  width: 100%;
  list-style-type: circle;
`;

const buttonWrapperStyle = css`
  display: flex;
  align-items: center;
  > button,
  > p {
    margin-right: 1rem;
  }
`;

export default NotificationList;
