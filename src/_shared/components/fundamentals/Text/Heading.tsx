import { HTMLAttributes } from 'react';
import { jsx as jsxWithEmotion } from '@emotion/react';
import { headingStyle } from './styles';
import { TextCommonProps } from './types';

type HeadingRange = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = {
  tag: `h${HeadingRange}`;
} & Omit<TextCommonProps, 'size'> &
  HTMLAttributes<HTMLHeadingElement>;

function Heading({ color, tag, children, ...props }: HeadingProps) {
  return jsxWithEmotion(tag, {
    ...props,
    children,
    css: headingStyle(color),
  });
}

export default Heading;
