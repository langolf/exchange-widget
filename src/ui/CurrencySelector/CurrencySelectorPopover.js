import React from 'react';
import clsx from 'clsx';
import AppModal from 'ui/AppModal/AppModal';
import style from './CurrencySelector.module.css';
import Button from 'ui/Button/Button';

const CurrencySelectorPopover = ({ isOpen, onClose, onChange }) => {
  const defaultCurrencyList = ['GBP', 'EUR', 'USD'];
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
            {defaultCurrencyList.map((entry, idx) => {
              return (
                <li
                  key={`${entry}-${idx}`}
                  onClick={() => {
                    onChange(entry);
                    onClose();
                  }}
                >
                  <span
                    className={clsx({
                      [style.flag]: true,
                      'currency-flag': true,
                      [`currency-flag-${entry.toLowerCase()}`]: true,
                    })}
                  />
                  {entry}
                </li>
              );
            })}
          </ul>
        }
        <div className={style.more}>
          <span className={style.moreIcon}>...</span> Other:
        </div>
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
