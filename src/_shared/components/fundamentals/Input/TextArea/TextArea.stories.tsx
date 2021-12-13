import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextArea from './index';

export default {
  title: 'Fundamentals/Input',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const InputTextArea = Template.bind({});

InputTextArea.args = {
  value: '',
  maxLength: 200,
  width: 500,
  placeholder: '입력하세요',
  title: '스크린리더가 이 텍스트를 읽어요',
};
