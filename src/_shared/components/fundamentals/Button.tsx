import { HTMLAttributes, ReactChild } from 'react';
import { css } from '@emotion/react';
import { colorTable, spaceTable } from '@/_shared/styles/variables';

type ButtonProps = {
  children: ReactChild;
  onClick: () => void;
  type: 'button' | 'submit';
} & HTMLAttributes<HTMLButtonElement>;

function Button({ children, onClick, type, ...props }: ButtonProps) {
  return (
    <button css={buttonStyle} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

const buttonStyle = css`
  background-color: transparent;
  border: 1px solid ${colorTable.white};
  color: ${colorTable.white};
  padding: 0.25rem ${spaceTable.xSmall};
  transition: color 0.25s, background-color 0.25s;
  &:hover {
    background-color: ${colorTable.white};
    color: ${colorTable.black};
  }
`;

export default Button;
