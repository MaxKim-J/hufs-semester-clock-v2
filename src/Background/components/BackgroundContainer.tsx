import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { fadeInAndOut } from '@style/animation';
import useBackgroundApplyQuery from '@/Background/hooks/query/useBackgroundApplyQuery';

function BackgroundContent() {
  const backgroundUrl = useBackgroundApplyQuery();

  if (backgroundUrl === undefined) {
    return null;
  }

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
