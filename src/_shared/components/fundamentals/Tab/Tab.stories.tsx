import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tab from './index';

export default {
  title: 'Fundamentals/Index',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => (
  <footer
    css={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem',
      margin: '10rem 20rem',
    }}
  >
    <Tab {...args}>
      <div>알맹알맹이!</div>
    </Tab>
  </footer>
);

export const GeneralTab = Template.bind({});

GeneralTab.args = {
  title: '설정',
};
