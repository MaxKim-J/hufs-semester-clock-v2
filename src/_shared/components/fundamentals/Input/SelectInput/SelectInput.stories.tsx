import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectInput from './index';

export default {
  title: 'Fundamentals/Input',
  component: SelectInput,
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => (
  <SelectInput {...args} />
);

export const InputSelect = Template.bind({});

InputSelect.args = {
  items: ['1', '2', '3'],
  title: '선택하세요',
};
