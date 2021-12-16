import { AnchorHTMLAttributes } from 'react';
import { linkStyle } from '../styles';
import { TextCommonProps } from '../types';

export type LinkProps = TextCommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

function Link({
  size = 'size16',
  color = 'white',
  weight = 'normal',
  children,
  ...props
}: LinkProps) {
  return (
    <a css={linkStyle(size, color, weight)} {...props}>
      {children}
    </a>
  );
}

export default Link;
