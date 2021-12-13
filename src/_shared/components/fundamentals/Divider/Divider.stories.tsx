import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Divider from './index';

export default {
  title: 'Fundamentals/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <section>
    <p>위 텍스트</p>
    <Divider {...args} />
    <p>아래 텍스트</p>
  </section>
);

export const GeneralDivider = Template.bind({});

GeneralDivider.args = {
  height: 1,
};
