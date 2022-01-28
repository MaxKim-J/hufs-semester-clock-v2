import { css } from '@emotion/react';
import { Heading, Link } from '@components/fundamentals/Text';
import { spaceTable } from '@style/variables';
import Github from '@shared/images/github.svg';
import Article from '@shared/images/article.svg';
import Mail from '@shared/images/mail.svg';
import { readableHiddenHeading } from '@/_shared/styles/common';

const iconLinks = [
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
];

const textLinks = [
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
];

function AppLinkArticle() {
  return (
    <article css={appLinkStyle}>
      <Heading tag="h2" id="feedback-heading" css={readableHiddenHeading}>
        앱 관련 링크
      </Heading>
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
    </article>
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

export default AppLinkArticle;
