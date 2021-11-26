import React from 'react';
import Text from '../_shared/components/fundamentals/Text/Text';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Fundamentals/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const GeneralText = Template.bind({});

GeneralText.args = {
  children: '일반 텍스트',
};
