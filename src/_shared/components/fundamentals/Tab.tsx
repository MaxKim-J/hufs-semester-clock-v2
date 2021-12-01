import { ReactChild, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { css } from '@emotion/react';
import { Text } from './Text';
import Spacer from './Spacer';
import CloseWhite from '@/_shared/images/close-white.svg';

type TabProps = {
  title: string;
  children: ReactChild;
  direction?: 'left' | 'right';
};

function Tab({ title, children, direction = 'left' }: TabProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={dialogContainerStyle}>
      <AnimatePresence>
        {isOpen && (
          <motion.dialog
            css={dialogStyle(direction)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            open
          >
            <div css={dialogHeader}>
              <Text weight="bold">{title}</Text>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <img css={closeImg} src={CloseWhite} alt="닫기" />
              </button>
            </div>
            <Spacer height="small" />
            {children}
          </motion.dialog>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => {
          setIsOpen((state) => !state);
        }}
      >
        <Text>{title}</Text>
      </button>
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
  width: 20rem;
  padding: 1rem;
  border-radius: 16px;
  background-color: rgb(0, 0, 0, 0.5);
`;

const closeImg = css`
  width: 1rem;
  height: 1rem;
`;

export default Tab;
