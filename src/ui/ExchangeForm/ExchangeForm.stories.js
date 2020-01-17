import React from 'react';
import { addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ExchangeForm from './ExchangeForm';

export default {
    title: 'ExchangeForm',
    component: ExchangeForm,
    parameters: {
        viewport: { defaultViewport: 'iphone6' },
    },
};

export const initial = () => <ExchangeForm />;
