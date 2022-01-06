import { useEffect, useState } from 'react';
import { Text } from '@components/fundamentals/Text';
import { getNow } from '@/SemesterClock/utils/clockHelper';

function TodayClockArticle() {
  const [now, setNow] = useState<Date>(getNow());

  useEffect(() => {
    setInterval(() => {
      setNow(getNow());
    }, 1000);
  }, [setNow]);

  return (
    <article>
      <div css={{ display: 'flex' }}>
        <Text>현재시간</Text>
        <Text>{now.getFullYear()}년</Text>
        <Text>{now.getMonth() + 1}월</Text>
        <Text>{now.getDay()}일</Text>
        <Text>{now.getHours()}시</Text>
        <Text>{now.getMinutes()}분</Text>
      </div>
    </article>
  );
}

export default TodayClockArticle;
