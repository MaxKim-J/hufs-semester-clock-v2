import { ReactChild } from 'react';
import { css } from '@emotion/react';
import { Heading } from '@components/fundamentals/Text';
import { transparentTable, spaceTable } from '@style/variables';

type BoxLayoutProps = {
  children: ReactChild;
  title: string;
};

function BoxLayout({ title, children }: BoxLayoutProps) {
  return (
    <article css={boxContainerStyle}>
      <div css={boxHeaderStyle}>
        <Heading tag="h2" color="black">
          {title}
        </Heading>
      </div>
      <div css={boxContentStyle}>{children}</div>
    </article>
  );
}

const boxContainerStyle = css`
  width: fit-content;
  height: fit-content;
`;

const boxHeaderStyle = css`
  background-color: ${transparentTable.white70};
  padding: ${spaceTable.xSmall};
`;

const boxContentStyle = css`
  background-color: ${transparentTable.white50};
  padding: ${spaceTable.xSmall};
`;

export default BoxLayout;
