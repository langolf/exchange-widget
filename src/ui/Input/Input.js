import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = props => {
    const [value, setValue] = useState('');

    const handleChange = event => {
        if (props.onChange) {
            props.onChange(event);
        }

        setValue(event.target.value);
    };

    return (
        <div className={styles.root}>
            <input
                value={value}
                type="text"
                inputMode="numeric"
                pattern="[0-9]"
                onChange={handleChange}
            />
        </div>
    );
};

export default Input;
