import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SwitchInput from './index';

export default {
  title: 'Fundamentals/Input',
  component: SwitchInput,
} as ComponentMeta<typeof SwitchInput>;

const Template: ComponentStory<typeof SwitchInput> = (args) => (
  <SwitchInput {...args} />
);

export const InputSwitch = Template.bind({});

InputSwitch.args = {
  title: '스크린리더가 이 텍스트를 읽어요',
  checked: false,
  disabled: false,
};
