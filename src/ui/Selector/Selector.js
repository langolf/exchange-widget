import React, { useState } from 'react';
import style from './Selector.module.css';
import { ReactComponent as IconArrow } from './icon-arrow-down.svg';

import { useAppContext } from 'hooks/app-context';
import AppModal from 'ui/AppModal/AppModal';

const Selector = ({ activeItem, isActive, onChange, list, dropdownContent, dropdownLabel, dropdownMore, ...props }) => {
  const { state, dispatch } = useAppContext();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setDropdownOpen(true);
    dispatch({ type: 'MODAL', isOpen: true });
  };

  return (
    <div className={style.root}>
      <select
        onMouseDown={event => {
          event.preventDefault();
          handleDropdownOpen();
        }}
        defaultValue={activeItem}
        className={style.control}
        {...props}
      >
        {list.map(({ id }) => (
          <option value={id} key={`${id}`}>
            {id}
          </option>
        ))}
      </select>

      <div className={style.icon}>
        <IconArrow />
      </div>

      {isDropdownOpen && (
        <AppModal isOpen={state.modalIsOpen}>
          <div className={style.dropdownContent}>
            {dropdownLabel && <h3 className={style.dropdownLabel}>{dropdownLabel}</h3>}
            {dropdownContent}
            {dropdownMore && (
              <div className={style.more}>
                <span className={style.moreIcon}>...</span>
                {dropdownMore}
              </div>
            )}
          </div>

          <button
            className={style.buttonCancel}
            onClick={() => {
              dispatch({ type: 'MODAL', isOpen: false });
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
