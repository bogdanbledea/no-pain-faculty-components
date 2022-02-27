import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toggle from './Toggle';

export default {
  title: 'Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const Enabled: ComponentStory<typeof Toggle> = () => {
  return <Toggle />
};