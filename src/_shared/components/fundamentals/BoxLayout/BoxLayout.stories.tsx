import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoxLayout from './index';

export default {
  title: 'Fundamentals/BoxLayout',
  component: BoxLayout,
} as ComponentMeta<typeof BoxLayout>;

const Template: ComponentStory<typeof BoxLayout> = (args) => (
  <div css={{ width: '500px' }}>
    <BoxLayout {...args}>
      <div
        css={{
          width: '300px',
          height: '150px',
        }}
      >
        content
      </div>
    </BoxLayout>
  </div>
);

export const GeneralBoxLayout = Template.bind({});

GeneralBoxLayout.args = {
  title: 'box layout',
};
