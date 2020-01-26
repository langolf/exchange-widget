import React from 'react';
import { addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CurrencyField from './CurrencySelector.js';

export default {
  title: 'CurrencyField',
  component: CurrencyField,
  parameters: {
    viewport: { defaultViewport: 'iphone6' },
  },
};

export const initial = () => <CurrencyField balance={20} type="usd" />;
