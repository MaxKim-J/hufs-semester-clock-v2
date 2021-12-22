import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { fadeInAndOut } from '@style/animation';
import getBackgroundByTime from '@/Background/utils/getBackgroundByTime';
import useBackgroundApplyQuery from '@/Background/query/useBackgroundApplyQuery';

function BackgroundContent() {
  const userBackgroundImage = useBackgroundApplyQuery();
  if (userBackgroundImage === undefined) return null;

  const backgroundUrl = getBackgroundByTime(userBackgroundImage, new Date());

  return (
    <motion.div {...fadeInAndOut} css={backgroundWrapperStyle}>
      <div css={backgroundCoverStyle} />
      <div
        data-testid="backgroundImage"
        css={backgroundImageStyle(backgroundUrl)}
      />
    </motion.div>
  );
}

const backgroundWrapperStyle = css`
  position: fixed;
  top: 0;
`;

const backgroundCoverStyle = css`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
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
