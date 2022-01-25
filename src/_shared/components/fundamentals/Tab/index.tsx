import { ReactChild, useState, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import CloseWhite from '@shared/images/close-white.svg';
import { spaceTable, transparentTable } from '@style/variables';
import { fadeInAndOut } from '@style/animation';
import { css } from '@emotion/react';
import { Heading, Text } from '../Text';
import Spacer from '../Spacer';

type TabProps = {
  title: string;
  children: ReactChild | ReactChild[];
  direction?: 'left' | 'right';
};

function Tab({ title, children, direction = 'left' }: TabProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openTabDialog = useCallback(() => {
    setIsOpen((state) => !state);
  }, [setIsOpen]);

  const closeTabDialog = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div css={dialogContainerStyle}>
      <button type="button" onClick={openTabDialog}>
        <Text>{title}</Text>
      </button>
      <AnimatePresence>
        {isOpen && (
          <m.dialog
            role="dialog"
            aria-modal
            open
            css={dialogStyle(direction)}
            {...fadeInAndOut}
          >
            <div css={dialogHeader}>
              <Heading tag="h1">{title}</Heading>
              <button type="button" onClick={closeTabDialog}>
                <img css={closeImg} src={CloseWhite} alt="닫기" />
              </button>
            </div>
            <Spacer height="size8" />
            {children}
          </m.dialog>
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
`;

const dialogStyle = (direction: 'left' | 'right') => css`
  position: absolute;
  margin-left: ${direction === 'left' ? '0' : 'auto'};
  bottom: 3rem;
  border: none;
  width: 25rem;
  padding: ${spaceTable.size16};
  border-radius: 1rem;
  background-color: ${transparentTable.black90};
`;

const closeImg = css`
  width: 1rem;
  height: 1rem;
`;

export default Tab;
