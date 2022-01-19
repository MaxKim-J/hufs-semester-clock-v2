import { useState, useEffect, useCallback } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { appearFromRight } from '@style/animation';
import { colorTable } from '@style/variables';
import { Text } from '../Text';

type DotSwitchProps = {
  id: number;
  activateId: number;
  tooltip: string;
  onClick: (id: number) => void;
};

function DotSwitch({ tooltip, onClick, activateId, id }: DotSwitchProps) {
  const [isActive, setIsActive] = useState(id === activateId);

  useEffect(() => {
    setIsActive(id === activateId);
  }, [activateId, id]);

  const activateDot = useCallback(() => {
    setIsActive(true);
    onClick(id);
  }, [onClick, id]);

  const [isShowTooltip, setIsShowTooltip] = useState(false);

  return (
    <button
      aria-label={`${tooltip}로 이동하기`}
      type="button"
      css={dotSwitchStyle}
      onClick={activateDot}
      onMouseEnter={() => setIsShowTooltip(true)}
      onMouseLeave={() => setIsShowTooltip(false)}
    >
      {isShowTooltip && (
        <motion.div {...appearFromRight}>
          <Text size="size12" css={tooltipStyle}>
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
  min-width: 10rem;
`;

const tooltipStyle = css`
  position: absolute;
  left: 2rem;
`;

const dotStyle = (isActive: boolean) => css`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  opacity: 0.7;
  background-color: ${isActive ? colorTable.white : colorTable.darkGray};
`;

export default DotSwitch;
