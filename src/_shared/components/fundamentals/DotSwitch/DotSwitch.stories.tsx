import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DotSwitch from './index';

export default {
  title: 'Fundamentals/DotSwitch',
  component: DotSwitch,
} as ComponentMeta<typeof DotSwitch>;

const Template: ComponentStory<typeof DotSwitch> = (args) => (
  <DotSwitch {...args} />
);

export const GeneralDotSwitch = Template.bind({});

GeneralDotSwitch.args = {
  activateId: 0,
  tooltip: '부가기능으로 이동',
  id: 0,
};
