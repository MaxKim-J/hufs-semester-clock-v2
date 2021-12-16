import { useRef } from 'react';
import { css } from '@emotion/react';
import Mail from '@shared/images/mail.svg';
import Article from '@shared/images/article.svg';
import Github from '@shared/images/github.svg';
import { Link } from '@components/fundamentals/Text';
import { spaceTable } from '@style/variables';

function AppLink() {
  const iconLinks = useRef([
    {
      id: 0,
      href: 'https://github.com/MaxKim-J/hufs-semester-clock-v2',
      alt: '깃헙 레포지토리 바로가기',
      src: Github,
    },
    {
      id: 1,
      href: 'https://maxkim-j.github.io/',
      alt: '개발자 기술 블로그 바로가기',
      src: Article,
    },
    {
      id: 2,
      href: 'mailto:hwaseen@gmail.com',
      alt: '개발자에게 이메일 보내기',
      src: Mail,
    },
  ]).current;

  const textLinks = useRef([
    {
      id: 0,
      href: 'https://github.com/MaxKim-J/hufs-semester-clock-v2/releases',
      text: '릴리즈 노트',
    },
    {
      id: 1,
      href: 'https://chrome.google.com/webstore/detail/%EC%99%B8%EB%8C%80-%EC%A2%85%EA%B0%95%EC%8B%9C%EA%B3%84/jadlpknbgnmmelikpcaogikohieafaem?hl=ko',
      text: '크롬 스토어',
    },
    {
      id: 2,
      href: 'https://store.whale.naver.com/detail/mckjnmgioalpnggjipjkmadnandhomei',
      text: '웨일 스토어',
    },
  ]).current;

  return (
    <div css={appLinkStyle}>
      <ul aria-label="관련 링크 바로가기" css={linkListStyle}>
        {iconLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href} css={linkStyle} target="_blank">
              <img src={link.src} css={iconStyle} alt={link.alt} />
            </Link>
          </li>
        ))}
      </ul>
      <ul aria-label="관련 링크 바로가기" css={linkListStyle}>
        {textLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              css={linkStyle}
              size="size12"
              target="_blank"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const appLinkStyle = css`
  display: flex;
`;

const linkListStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: ${spaceTable.size16};
`;

const linkStyle = css`
  margin-right: ${spaceTable.size8};
`;

const iconStyle = css`
  width: 2rem;
  height: 2rem;
`;

export default AppLink;
