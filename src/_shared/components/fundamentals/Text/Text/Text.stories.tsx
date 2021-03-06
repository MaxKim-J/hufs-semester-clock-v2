import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from './index';

export default {
  title: 'Fundamentals/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const GeneralText = Template.bind({});

GeneralText.args = {
  children: '일반 텍스트',
  color: 'white',
  weight: 'normal',
  size: 'size16',
};
