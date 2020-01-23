import React, { useState } from 'react';
import style from './Selector.module.css';
import { ReactComponent as IconArrow } from './icon-arrow-down.svg';

import { useAppContext } from 'hooks/app-context';
import AppModal from 'ui/AppModal/AppModal';

const Selector = ({ activeItem, isActive, onChange, list, dropdownContent, ...props }) => {
  const { state, dispatch } = useAppContext();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={style.root}>
      <select
        key={props.key}
        onMouseDown={event => {
          event.preventDefault();
          setDropdownOpen(true);
          dispatch({ type: 'MODAL_OPEN' });
        }}
        value={activeItem}
        className={style.control}
        {...props}
      >
        {list.map(({ code }) => (
          <option value={code} key={code}>
            {code}
          </option>
        ))}
      </select>

      <div className={style.icon}>
        <IconArrow />
      </div>

      {isDropdownOpen && (
        <AppModal isOpen={state.modalIsOpen}>
          <div className={style.dropdownContent}>
            {props.dropdownLabel && <h3 className={style.dropdownLabel}>{props.dropdownLabel}</h3>}
            {dropdownContent}
            {props.dropdownMore && (
              <div className={style.more}>
                <span className={style.moreIcon}>...</span>
                {props.dropdownMore}
              </div>
            )}
          </div>

          <button
            className={style.buttonCancel}
            onClick={() => {
              dispatch({ type: 'MODAL_OPEN' });
            }}
          >
            Cancel
          </button>
        </AppModal>
      )}
    </div>
  );
};

export default Selector;
