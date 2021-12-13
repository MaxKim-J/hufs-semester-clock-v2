import { ButtonHTMLAttributes, ReactChild } from 'react';
import { css } from '@emotion/react';
import { colorTable, spaceTable } from '@style/variables';

type ButtonProps = {
  children: ReactChild;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button css={buttonStyle} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

const buttonStyle = css`
  border: 1px solid ${colorTable.white};
  color: ${colorTable.white};
  padding: 0.25rem ${spaceTable.xSmall};
  transition: color 0.25s, background-color 0.25s;
  &:hover {
    background-color: ${colorTable.white};
    color: ${colorTable.black};
  }
  &:disabled {
    pointer-events: none;
    background-color: ${colorTable.darkGray};
  }
`;

export default Button;
