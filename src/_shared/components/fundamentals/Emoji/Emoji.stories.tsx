import { ComponentMeta, ComponentStory } from '@storybook/react';
import Emoji from './index';

export default {
  title: 'Fundamentals/Emoji',
  component: Emoji,
} as ComponentMeta<typeof Emoji>;

const Template: ComponentStory<typeof Emoji> = (args) => <Emoji {...args} />;

export const GeneralEmoji = Template.bind({});

GeneralEmoji.args = {
  emoji: '🌧',
};
