import { css } from '@emotion/react';
import { m } from 'framer-motion';
import { transparentTable } from '@style/variables';
import { fadeInAndOut } from '@style/animation';
import getBackgroundByTime from '@/Background/utils/getBackgroundByTime';
import useBackgroundApplyQuery from '@/Background/queries/useBackgroundApplyQuery';

function BackgroundContent() {
  const userBackgroundImage = useBackgroundApplyQuery();
  if (userBackgroundImage === undefined) return null;

  const backgroundUrl = getBackgroundByTime(userBackgroundImage, new Date());

  return (
    <m.div {...fadeInAndOut} css={backgroundWrapperStyle}>
      <div css={backgroundCoverStyle} />
      <div
        role="img"
        aria-label="배경 화면"
        id={userBackgroundImage.name}
        css={backgroundImageStyle(backgroundUrl)}
      />
    </m.div>
  );
}

const backgroundWrapperStyle = css`
  position: fixed;
  top: 0;
`;

const backgroundCoverStyle = css`
  width: 100vw;
  height: 100vh;
  background-color: ${transparentTable.black50};
  position: absolute;
  z-index: 1;
`;

const backgroundImageStyle = (backgroundUrl: string) => css`
  background-image: url('${backgroundUrl}');
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export default BackgroundContent;
