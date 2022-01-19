import { ReactChild } from 'react';
import { css } from '@emotion/react';
import { Heading } from '@components/fundamentals/Text';
import { transparentTable, spaceTable } from '@style/variables';

type BoxLayoutProps = {
  children: ReactChild;
  title: string;
  labelId: string;
};

function BoxLayout({ title, children, labelId }: BoxLayoutProps) {
  return (
    <article aria-labelledby={labelId} css={boxContainerStyle}>
      <div css={boxHeaderStyle}>
        <Heading id={labelId} tag="h2" color="black">
          {title}
        </Heading>
      </div>
      {children}
    </article>
  );
}

const boxContainerStyle = css`
  width: 100%;
  height: calc(100% - 1rem);
  background-color: ${transparentTable.white70};
  box-sizing: border-box;
  padding: 0 0.5rem;
}
`;

const boxHeaderStyle = css`
  background-color: ${transparentTable.white90};
  padding: ${spaceTable.size4};
  position: relative;
  left: -0.5rem;
  width: 29.5rem;
`;

export default BoxLayout;
