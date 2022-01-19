import { css } from '@emotion/react';
import { Heading, Link } from '@components/fundamentals/Text';
import { spaceTable } from '@style/variables';
import { iconLinks, textLinks } from '@shared/data/appLinks';
import { readableHiddenHeading } from '@/_shared/styles/common';

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
