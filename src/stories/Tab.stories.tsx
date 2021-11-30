import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tab from '../_shared/components/fundamentals/Tab';

export default {
  title: 'Fundamentals',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => (
  <Tab {...args}>
    <div>알맹이</div>
  </Tab>
);

export const GeneralTab = Template.bind({});

GeneralTab.args = {
  title: '설정',
};
