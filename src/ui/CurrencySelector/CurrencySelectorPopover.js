import React from 'react';
import clsx from 'clsx';
import AppModal from 'ui/AppModal/AppModal';
import style from './CurrencySelector.module.css';
import { useStore } from 'redhooks';
import Button from 'ui/Button/Button';

const CurrencySelectorPopover = ({ isOpen, onClose, onChange }) => {
  const { state } = useStore();
  const { vault } = state.userPocket;

  return (
    <AppModal
      onRequestClose={() => {
        onClose();
      }}
      isOpen={true}
    >
      <div className={style.dropdownContent}>
        <h3 className={style.dropdownLabel}>Choose currency:</h3>
        {
          <ul className={style.selectorList}>
            {Object.values(vault).map(({ id, balance }) => {
              return (
                <li
                  key={id}
                  onClick={() => {
                    onChange(id);
                    onClose();
                  }}
                >
                  <span
                    className={clsx({
                      [style.flag]: true,
                      'currency-flag': true,
                      [`currency-flag-${id.toLowerCase()}`]: true,
                    })}
                  />
                  <strong style={{ marginRight: 5 }}>{id}</strong>
                  {'•'}
                  <b style={{ marginLeft: 5 }}>{balance}</b>
                </li>
              );
            })}
          </ul>
        }
      </div>

      <Button
        className={style.buttonCancel}
        onClick={e => {
          onClose();
        }}
      >
        Cancel
      </Button>
    </AppModal>
  );
};

export default CurrencySelectorPopover;
