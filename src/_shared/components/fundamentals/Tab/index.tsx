import { ReactChild, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloseWhite from '@shared/images/close-white.svg';
import { spaceTable, transparentTable } from '@style/variables';
import { fadeInAndOut } from '@style/animation';
import { css } from '@emotion/react';
import { Text } from '../Text';
import Spacer from '../Spacer';

type TabProps = {
  title: string;
  children: ReactChild;
  direction?: 'left' | 'right';
};

function Tab({ title, children, direction = 'left' }: TabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  return (
    <div css={dialogContainerStyle}>
      <button
        type="button"
        onClick={() => {
          setIsOpen((state) => !state);
        }}
      >
        <Text>{title}</Text>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.dialog
            aria-modal
            open
            ref={dialogRef}
            css={dialogStyle(direction)}
            {...fadeInAndOut}
          >
            <div css={dialogHeader}>
              <Text size="size24">{title}</Text>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <img css={closeImg} src={CloseWhite} alt="닫기" />
              </button>
            </div>
            <Spacer height="size8" />
            {children}
          </motion.dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

const dialogContainerStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const dialogHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
  z-index: 20;
`;

const dialogStyle = (direction: 'left' | 'right') => css`
  position: absolute;
  margin-left: ${direction === 'left' ? '0' : 'auto'};
  bottom: 3rem;
  border: none;
  width: 25rem;
  padding: ${spaceTable.size16};
  border-radius: 1rem;
  background-color: ${transparentTable.black70};
`;

const closeImg = css`
  width: 1rem;
  height: 1rem;
`;

export default Tab;
