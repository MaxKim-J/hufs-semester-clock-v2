import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../_shared/components/fundamentals/Button';

export default {
  title: 'Fundamentals/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const GeneralButton = Template.bind({});

GeneralButton.args = {
  type: 'button',
  children: '버튼',
};
