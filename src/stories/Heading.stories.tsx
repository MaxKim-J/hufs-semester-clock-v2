import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading from '../_shared/components/fundamentals/Text/Heading';

export default {
  title: 'Fundamentals/Text',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const HeadingText = Template.bind({});

HeadingText.args = {
  children: '헤딩 텍스트',
  tag: 'h1',
  color: 'white',
};
