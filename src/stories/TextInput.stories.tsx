import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextInput from '../_shared/components/fundamentals/Input/TextInput';

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
  title: '스크린리더가 이 텍스트를 읽어요',
  placeholder: '입력하세요',
};
