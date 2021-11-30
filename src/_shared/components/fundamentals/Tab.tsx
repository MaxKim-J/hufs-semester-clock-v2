import { ReactChild, useState } from 'react';
import { css } from '@emotion/react';
import { Text } from './Text';
import Button from './Button';
import Spacer from './Spacer';

type TabProps = {
  title: string;
  children: ReactChild;
};

function Tab({ title, children }: TabProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={dialogContainerStyle}>
      {isOpen && (
        <dialog css={dialogStyle} open>
          <div css={dialogHeader}>
            <Text>{title}</Text>
            <Button
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              X
            </Button>
          </div>
          <Spacer height="small" />
          {children}
        </dialog>
      )}
      <Button
        type="button"
        onClick={() => {
          setIsOpen((state) => !state);
        }}
      >
        {title}
      </Button>
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
