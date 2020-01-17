import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = props => {
    const [value, setValue] = useState(props.value);

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
                pattern="[0-9]+"
                placeholder="0"
                className={styles.input}
                onChange={handleChange}
            />
        </div>
    );
};

export default Input;
