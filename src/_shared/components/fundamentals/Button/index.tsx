import { ButtonHTMLAttributes, ReactChild } from 'react';
import { css } from '@emotion/react';
import {
  colorTable,
  ColorType,
  spaceTable,
  textTable,
  TextType,
} from '@style/variables';

type ButtonProps = {
  children: ReactChild;
  size?: TextType;
  color?: ColorType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  onClick,
  size = 'size16',
  color = 'white',
  ...props
}: ButtonProps) {
  return (
    <button css={buttonStyle(size, color)} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

const buttonStyle = (size: TextType, color: ColorType) => css`
  font-size: ${textTable[size]};
  border: 1px solid ${colorTable[color]};
  color: ${colorTable[color]};
  padding: ${spaceTable.size4};
  transition: color 0.25s, background-color 0.25s;
  &:hover {
    background-color: ${colorTable[color]};
    color: ${colorTable[color === 'white' ? 'black' : 'white']};
  }
  &:disabled {
    pointer-events: none;
    background-color: ${colorTable.darkGray};
  }
`;

export default Button;
