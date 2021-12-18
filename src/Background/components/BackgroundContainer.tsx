import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { fadeInAndOut } from '@style/animation';
import getBackgroundByTime from '@shared/utils/getBackgroundByTime';
import useBackgroundApplyQuery from '@/Background/hooks/query/useBackgroundApplyQuery';

function BackgroundContent() {
  const userBackgroundImage = useBackgroundApplyQuery();
  if (userBackgroundImage === undefined) return null;

  const backgroundUrl = getBackgroundByTime(userBackgroundImage);

  return (
    <motion.div {...fadeInAndOut}>
      <div css={backgroundCoverStyle} />
      <div css={backgroundImageStyle(backgroundUrl)} />
    </motion.div>
  );
}

const backgroundCoverStyle = css`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
`;

const backgroundImageStyle = (backgroundUrl: string) => css`
  background-image: url('${backgroundUrl}');
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export default BackgroundContent;
