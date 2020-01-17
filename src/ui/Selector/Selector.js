import React, { useState } from 'react';
import style from './Selector.module.css';
import { ReactComponent as IconArrow } from './icon-arrow-down.svg';

const Selector = props => {
    const [activeItem, setSelected] = useState(props.activeItem);

    const handleChange = event => {
        setSelected(event.target.value);

        if (props.onChange) {
            props.onChange(event.target.value);
        }
    };

    return (
        <div className={style.root}>
            <select
                value={activeItem}
                onChange={handleChange}
                className={style.control}
                name="asda"
                id=""
            >
                {Object.keys(props.list).map(item => (
                    <option value={props.list[item]} key={item}>
                        {item}
                    </option>
                ))}
            </select>

            <div className={style.icon}>
                <IconArrow />
            </div>
        </div>
    );
};

export default Selector;
