import React from 'react';
import Screen from 'ui/Screen/Screen';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Icon from 'ui/Icon/Icon';
import { ReactComponent as IconArrow } from './icon-arrow-down.svg';
import { ReactComponent as IconRefresh } from './icon-arrow-down.svg';
import { ReactComponent as IconInfo } from './icon-arrow-down.svg';
import currencyList from 'helpers/currencies';
import CircleButton from 'ui/CircleButton/CircleButton';
import style from './ScreenStart.module.css';
import { useStore } from 'redhooks';

const ScreenStart = props => {
  const { state, dispatch } = useStore();
  const [integer, decimal] = state.userPocket.vault.GBP.balance.toString().split('.');

  return (
    <Screen closeNavElement={true}>
      <div className={style.board}>
        <div className={style.boardCurrency}>
          <div className={style.boardCurrencyLine}>
            <div className={style.boardCurrencyValue}>
              <strong>
                {currencyList.GBP.currencySymbol}
                {integer}
                {decimal && <small>.{decimal}</small>}
              </strong>

              <div className={style.boardCurrencyHandler}>
                <Icon>
                  <IconArrow />
                </Icon>
              </div>
            </div>
          </div>

          <div className={style.boardCurrencyDescription}>
            <span>{currencyList.GBP.currencyName}</span>
            <span
              style={{ width: 15, height: 15, borderRadius: '100%', backgroundPosition: 'center' }}
              className={clsx({
                'currency-flag': true,
                [`currency-flag-gbp`]: true,
              })}
            />
            <span>{currencyList.GBP.id}</span>
          </div>
        </div>

        <div className={style.boardActions}>
          <CircleButton title="Add Money" icon={<IconArrow />} />

          <CircleButton title="Exchange" icon={<IconRefresh />} to="/exchange" />

          <CircleButton title="Details" icon={<IconInfo />} />
        </div>
      </div>
    </Screen>
  );
};

export default ScreenStart;
