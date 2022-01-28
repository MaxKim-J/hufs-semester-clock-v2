import { getNewBookmarks } from '../utils/bookmarkHelper';

describe('UNIT: getNewBookmarks 함수는 새롭게 생성된 북마크가 들어간 배열을 반환한다.', () => {
  it('url 인자가 Http로 시작하지 않는 경우, https를 붙인 값을 url 속성으로 반환한다.', () => {
    const given = getNewBookmarks('네이버', 'naver.com');
    expect(given[0].url).toEqual('https://naver.com');
  });

  it('url 인자가 Http로 시작하는 경우, 그대로 url 속성으로 반환한다.', () => {
    const given = getNewBookmarks('네이버', 'https://naver.com');
    expect(given[0].url).toEqual('https://naver.com');
  });

  it('id 속성은 9, 혹은 10자 길이의 문자열이다.', () => {
    const given = getNewBookmarks('네이버', 'https://naver.com');
    expect(given[0].id).toEqual(expect.stringMatching(/[a-z0-9]{9,10}/));
  });
});
