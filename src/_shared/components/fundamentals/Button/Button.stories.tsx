import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './index';

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
