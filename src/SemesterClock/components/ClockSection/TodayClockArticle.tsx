import { useEffect, useState } from 'react';
import { spaceTable } from '@style/variables';
import { css } from '@emotion/react';
import { Heading, Text } from '@components/fundamentals/Text';
import { getNow } from '@shared/utils/timeHelper';
import { formatDigits } from '@shared/utils/formatHelper';
import { readableHiddenHeading } from '@style/common';

function TodayClockArticle() {
  const [now, setNow] = useState<Date>(getNow());

  useEffect(() => {
    setInterval(() => {
      setNow(getNow());
    }, 1000);
  }, [setNow]);

  const todayClockData = [
    { text: '년', value: now.getFullYear() },
    { text: '월', value: now.getMonth() + 1 },
    { text: '일', value: now.getDate() },
    { text: '시', value: now.getHours() },
    { text: '분', value: now.getMinutes() },
  ];

  return (
    <article aria-labelledby="today-clock-heading">
      <Heading tag="h3" id="today-clock-heading" css={readableHiddenHeading}>
        현재 시간 표시란
      </Heading>
      <div css={todayClockStyle}>
        <Text css={clockDigitStyle}>현재시간: </Text>
        {todayClockData.map((data) => (
          <Text css={clockDigitStyle} key={data.text}>
            {formatDigits(data.value)}
            {data.text}
          </Text>
        ))}
      </div>
    </article>
  );
}

const todayClockStyle = css`
  display: flex;
  justify-content: center;
`;

const clockDigitStyle = css`
  margin-right: ${spaceTable.size4};
`;

export default TodayClockArticle;
