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
  items: [
    { key: 1, value: '1' },
    { key: 2, value: '2' },
    { key: 3, value: '3' },
  ],
  title: '선택하세요',
};
