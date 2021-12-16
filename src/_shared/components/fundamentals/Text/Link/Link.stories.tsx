import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from './index';

export default {
  title: 'Fundamentals/Text',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkText = Template.bind({});

LinkText.args = {
  children: '링크 텍스트',
  href: '/',
  color: 'white',
  weight: 'normal',
  size: 'size16',
};
