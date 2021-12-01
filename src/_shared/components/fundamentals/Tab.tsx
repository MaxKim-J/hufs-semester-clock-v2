import { ReactChild, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { css } from '@emotion/react';
import { Text } from './Text';
import Spacer from './Spacer';
import Close from '@/_shared/images/close-white.svg';

type TabProps = {
  title: string;
  children: ReactChild;
};

function Tab({ title, children }: TabProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={dialogContainerStyle}>
      <AnimatePresence>
        {isOpen && (
          <motion.dialog
            css={dialogStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            open
          >
            <div css={dialogHeader}>
              <Text>{title}</Text>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <img src={Close} alt="닫기" />
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
        {title}
      </button>
    </div>
  );
}

const dialogContainerStyle = css`
  position: relative;
`;

const dialogHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
  z-index: 20;
`;

const dialogStyle = css`
  position: absolute;
  margin: 0;
  bottom: 3rem;
  border: none;
  min-width: 10rem;
  min-height: 10rem;
  padding: 1rem;
  border-radius: 16px;
  background-color: rgb(0, 0, 0, 0.5);
  transition: display 2s;
`;

export default Tab;
