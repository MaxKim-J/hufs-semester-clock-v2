import { ButtonHTMLAttributes, ReactChild } from 'react';
import { css } from '@emotion/react';
import { colorTable, spaceTable, textTable, TextType } from '@style/variables';

type ButtonProps = {
  children: ReactChild;
  size?: TextType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, onClick, size = 'size16', ...props }: ButtonProps) {
  return (
    <button css={buttonStyle(size)} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

const buttonStyle = (size: TextType) => css`
  font-size: ${textTable[size]};
  border: 1px solid ${colorTable.white};
  color: ${colorTable.white};
  padding: ${spaceTable.size4};
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
