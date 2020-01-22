import React from 'react';
import Icon from 'ui/Icon/Icon';
import { ReactComponent as IconSwap } from './icon-swap.svg';
import style from './ExchangeForm.module.css';

const ExchangeFormSwapAction = ({ onClick }) => (
  <div className={style.swap} onClick={onClick}>
    <div className={style.swapIcon}>
      <Icon>
        <IconSwap />
      </Icon>
    </div>
  </div>
);

export default ExchangeFormSwapAction;
