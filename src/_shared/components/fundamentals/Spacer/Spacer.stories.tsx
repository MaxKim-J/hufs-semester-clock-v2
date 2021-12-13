import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Spacer from './index';

export default {
  title: 'Fundamentals/Spacer',
  component: Spacer,
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args) => (
  <section>
    <p>위 텍스트</p>
    <Spacer {...args} />
    <p>아래 텍스트</p>
  </section>
);

export const GeneralSpacer = Template.bind({});

GeneralSpacer.args = {};
