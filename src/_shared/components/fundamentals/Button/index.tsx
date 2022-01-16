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
  children: ReactChild | ReactChild[];
  size?: TextType;
  color?: ColorType;
  noBorder?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  onClick,
  size = 'size16',
  color = 'white',
  noBorder = false,
  ...props
}: ButtonProps) {
  return (
    <button
      css={buttonStyle(size, color, noBorder)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonStyle = (
  size: TextType,
  color: ColorType,
  noBorder: boolean
) => css`
  font-size: ${textTable[size]};
  ${noBorder ? null : `border: 1px solid ${colorTable[color]}`};
  color: ${colorTable[color]};
  padding: ${noBorder ? 'none' : spaceTable.size4};
  transition: color 0.25s, background-color 0.25s;
  text-decoration: ${noBorder ? 'underline' : 'none'};

  &:hover {
    background-color: ${noBorder ? 'transparent' : colorTable[color]};
    color: ${noBorder
      ? colorTable[color]
      : colorTable[color === 'white' ? 'black' : 'white']};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${colorTable.darkGray};
  }
`;

export default Button;
