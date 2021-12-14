import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { fadeInAndOut } from '@style/animation';
import useBackgroundInitializeQuery from '@/Background/hooks/query/useBackgroundInitializeQuery';

function BackgroundContent() {
  const dataUrl = useBackgroundInitializeQuery();

  if (dataUrl === undefined) {
    return null;
  }

  return (
    <motion.div {...fadeInAndOut}>
      <div css={backgroundCoverStyle} />
      <div css={backgroundImageStyle(dataUrl)} />
    </motion.div>
  );
}

const backgroundCoverStyle = css`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
`;

const backgroundImageStyle = (dataUrl: string) => css`
  background-image: url('${dataUrl}');
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export default BackgroundContent;
