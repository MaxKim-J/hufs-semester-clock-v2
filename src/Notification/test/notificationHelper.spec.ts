import { getNotificationString } from '@/Notification/utils/notificationHelper';

describe('UNIT: getNotificationString 함수는 공지사항 객체를 날짜와 함께 일정한 크기로 잘라 목록에 적합한 문자열로 변환한다.', () => {
  it('title 속성이 35자가 넘는 경우, 32자까지 자르고, elipsis(...)를 붙여 리턴한다.', () => {
    const given = {
      date: '01-17',
      id: 1,
      link: 'http://builder.hufs.ac.kr/user/boardList.action?command=view&page=1&boardId=109336176&boardSeq=159808776',
      title:
        '[공통]2022학년도 1학기 학부 수업방식 안내(2022 Spring Semester Undergraduate Class Delivery Information)',
    };

    const when = getNotificationString(given);

    expect(when.slice(8).length).toBe(35);
    expect(when).toMatch(/\.{3}$/);
  });

  it('반환된 공지사항 문자열은 월, 일 날짜 정보를 포함한다.', () => {
    const given = {
      date: '01-17',
      id: 1,
      link: 'http://builder.hufs.ac.kr/user/boardList.action?command=view&page=1&boardId=109336176&boardSeq=159808776',
      title:
        '[공통]2022학년도 1학기 학부 수업방식 안내(2022 Spring Semester Undergraduate Class Delivery Information)',
    };
    expect(getNotificationString(given)).toMatch(/\(\d{2}-\d{2}\)/);
  });
});
