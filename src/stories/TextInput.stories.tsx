import React from 'react';
import TextInput from '../_shared/components/fundamentals/Input/TextInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Fundamentals/Input',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const InputText = Template.bind({});

InputText.args = {
  value: '',
  maxLength: 5,
};
