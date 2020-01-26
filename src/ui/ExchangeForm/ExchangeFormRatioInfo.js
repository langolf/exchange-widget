import React from 'react';
import Icon from 'ui/Icon/Icon';
import { ReactComponent as IconRiseChart } from './icon-rise-chart.svg';
import style from './ExchangeForm.module.css';
import currencyList from 'hooks/currencies';
import { useStore } from 'redhooks';

const ExchangeFormRatioInfo = ({ data, onClick }) => {
  const { state } = useStore();

  return (
    <div className={style.chart} onClick={onClick}>
      <div className={style.chartLine}>
        <div className={style.chartIcon}>
          <Icon>
            <IconRiseChart />
          </Icon>
        </div>
        <span>
          {/* {currencyList[exchange.source.currency].currencySymbol}1 ={' '}
        {currencyList[exchange.source.currency].currencySymbol}
        {data.rates[exchange.source.currency]} */}
        </span>
      </div>
    </div>
  );
};

export default ExchangeFormRatioInfo;
