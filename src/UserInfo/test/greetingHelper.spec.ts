import {
  DAWN,
  NIGHT,
  EVENING,
  MORNING,
  AFTERNOON,
  getGreetingMessage,
  Greetings,
} from '@/UserInfo/utils/greetingHelper';

describe('Unit: getGreetingMessage 함수는 현재 시간대에 맞는 인사 메시지를 리턴한다.', () => {
  const getGreetingMessages = (time: Greetings) => time.map((v) => v.message);

  it('오전 0시에는 새벽(DAWN) 인사 메시지를 리턴한다.', () => {
    const greetingMessage = getGreetingMessage(new Date('2022-01-21T00:00:00'));
    expect(getGreetingMessages(DAWN).includes(greetingMessage)).toBe(true);
  });

  it('오후 0시에 밤(NIGHT) 인사 메시지를 리턴하지 않는다.', () => {
    const greetingMessage = getGreetingMessage(new Date('2022-01-21T00:00:00'));
    expect(getGreetingMessages(NIGHT).includes(greetingMessage)).toBe(false);
  });

  it('오전 7시 30분에는 아침(MORNING) 인사 메시지를 리턴한다.', () => {
    const greetingMessage = getGreetingMessage(new Date('2022-01-21T07:30:00'));
    expect(getGreetingMessages(MORNING).includes(greetingMessage)).toBe(true);
  });

  it('오후 12시에는 오후(AFTERNOON) 인사 메시지를 리턴한다.', () => {
    const greetingMessage = getGreetingMessage(new Date('2022-01-21T12:00:00'));
    expect(getGreetingMessages(AFTERNOON).includes(greetingMessage)).toBe(true);
  });

  it('오후 17시 30분에는 오후(AFTERNOON) 인사 메시지를 리턴한다.', () => {
    const greetingMessage = getGreetingMessage(new Date('2022-01-21T17:30:00'));
    expect(getGreetingMessages(AFTERNOON).includes(greetingMessage)).toBe(true);
  });

  it('오후 5시 59분에는 오후(AFTERNOON) 인사 메시지를 리턴한다.', () => {
    const greetingMessage = getGreetingMessage(new Date('2022-01-21T17:59:00'));
    expect(getGreetingMessages(AFTERNOON).includes(greetingMessage)).toBe(true);
  });

  it('오후 18시 1분에는 저녁(EVENING) 인사 메시지를 리턴한다.', () => {
    const greetingMessage = getGreetingMessage(new Date('2022-01-21T18:01:00'));
    expect(getGreetingMessages(EVENING).includes(greetingMessage)).toBe(true);
  });

  it('오후 23시 59분에는 밤(NIGHT) 인사 메시지를 리턴한다.', () => {
    const greetingMessage = getGreetingMessage(new Date('2022-01-21T23:59:00'));
    expect(getGreetingMessages(NIGHT).includes(greetingMessage)).toBe(true);
  });
});
