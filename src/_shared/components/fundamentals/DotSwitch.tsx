import { useState, useEffect, useCallback } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { colorTable } from '@/_shared/styles/variables';
import { Text } from './Text';
import { appearFromRight } from '@/_shared/styles/animation';

type DotSwitchProps = {
  id: number;
  activateId: number;
  tooltip: string;
  onClick: (id: number) => void;
};

function DotSwitch({ tooltip, onClick, activateId, id }: DotSwitchProps) {
  const [isActive, setIsActive] = useState(id === activateId);

  useEffect(() => {
    if (id !== activateId) {
      setIsActive(id === activateId);
    }
  }, [activateId, id]);

  const activateDot = useCallback(() => {
    setIsActive(true);
    onClick(id);
  }, [onClick, id]);

  const [isShowTooltip, setIsShowTooltip] = useState(false);

  return (
    <button
      aria-labelledby={tooltip}
      css={dotSwitchStyle}
      onClick={activateDot}
      onMouseEnter={() => setIsShowTooltip(true)}
      onMouseLeave={() => setIsShowTooltip(false)}
    >
      {isShowTooltip && (
        <motion.div {...appearFromRight}>
          <Text size="xSmall" css={tooltipStyle}>
            {tooltip}
          </Text>
        </motion.div>
      )}
      <div css={dotStyle(isActive)} />
    </button>
  );
}

const dotSwitchStyle = css`
  position: relative;
`;

const tooltipStyle = css`
  position: absolute;
  left: 2rem;
`;

const dotStyle = (isActive: boolean) => css`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  opacity: 0.7;
  background-color: ${isActive ? colorTable.white : colorTable.darkGray};
`;

export default DotSwitch;
