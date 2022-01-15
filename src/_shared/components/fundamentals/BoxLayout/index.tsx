import { ReactChild } from 'react';
import { css } from '@emotion/react';
import { Heading } from '@components/fundamentals/Text';
import { transparentTable, spaceTable } from '@style/variables';
import Spacer from '@components/fundamentals/Spacer';

type BoxLayoutProps = {
  children: ReactChild;
  title: string;
};

function BoxLayout({ title, children }: BoxLayoutProps) {
  return (
    <article css={boxContainerStyle}>
      <div css={boxHeaderStyle}>
        <Heading tag="h3" color="black">
          {title}
        </Heading>
      </div>
      <div css={boxContentStyle}>{children}</div>
      <Spacer />
    </article>
  );
}

const boxContainerStyle = css`
  width: 100%;
  height: 100%;
`;

const boxHeaderStyle = css`
  background-color: ${transparentTable.white90};
  padding: ${spaceTable.size4};
`;

const boxContentStyle = css`
  background-color: ${transparentTable.white70};
  padding: ${spaceTable.size4};
  height: calc(100% - 3.5rem);
`;

export default BoxLayout;
