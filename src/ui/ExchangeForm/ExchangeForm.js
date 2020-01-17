import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CurrencyField from '../CurrencyField/CurrencyField.js';
import { CurrencyTypes } from '../../enum.js';
import PrimaryButton from '../PrimaryButton/PrimaryButton.js';

const ExchangeForm = props => {
    const [currencyPair, setCurrencyPair] = useState([CurrencyTypes.GBP, CurrencyTypes.EUR]);

    return (
        <form action="">
            <h1>Exchange</h1>
            {currencyPair.map(item => (
                <CurrencyField type={item} balance={22} />
            ))}

            <PrimaryButton text="Hello World" />
        </form>
    );
};

export default ExchangeForm;
