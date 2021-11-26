import React from 'react';
import Link from '../_shared/components/fundamentals/Text/Link';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Fundamentals/Text',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkText = Template.bind({});

LinkText.args = {
  children: '링크 텍스트',
  href: '/',
};
