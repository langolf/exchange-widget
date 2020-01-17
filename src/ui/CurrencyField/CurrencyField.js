import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input.js';
import Selector from '../Selector/Selector.js';
import Balance from '../Balance/Balance.js';
import style from './CurrencyField.module.css';
import StatusLine from '../StatusLine/StatusLine.js';

const currencyList = {
    GBP: 'gbp',
    EUR: 'eur',
    USD: 'usd',
};

const CurrencyField = props => {
    const [value, setValue] = useState(null);

    return (
        <form className={style.root}>
            <h1>Exchange</h1>
            <div className={style.field}>
                <div className={style.fieldSelector}>
                    <Selector
                        onChange={event => {
                            console.log(event);
                        }}
                        activeItem={currencyList.USD}
                        list={currencyList}
                    />
                </div>
                <div className={style.fieldInput}>
                    <Input value={value} />
                </div>
            </div>

            <div className={style.status}>
                <div className={style.balance}>
                    <Balance value={props.balance} />
                </div>

                <div className={style.message}>
                    <StatusLine message={'hello'} />
                </div>
            </div>
        </form>
    );
};

// todo: create global enums
CurrencyField.propTypes = {
    type: PropTypes.oneOf(['gbp', 'usd', 'eur']),
    balance: PropTypes.number,
};

export default CurrencyField;
