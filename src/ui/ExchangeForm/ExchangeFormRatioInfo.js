import React from 'react';
import Icon from 'ui/Icon/Icon';
import { ReactComponent as IconRiseChart } from './icon-rise-chart.svg';
import style from './ExchangeForm.module.css';
import currencyList from 'hooks/currencies';
import { useStore } from 'redhooks';
import useFetch from 'react-fetch-hook';

const ExchangeFormRatioInfo = ({ onClick }) => {
  const { state } = useStore();
  const [sourceCurrency, targetCurrency] = state.exchange.fields.map(el => el.currency);
  const { isLoading, data } = useFetch(
    `https://api.exchangeratesapi.io/latest?&base=${sourceCurrency}&symbols=${targetCurrency}`
  );

  return isLoading ? null : (
    <div className={style.chart} onClick={onClick}>
      <div className={style.chartLine}>
        <div className={style.chartIcon}>
          <Icon>
            <IconRiseChart />
          </Icon>
        </div>
        <span>
          <span>{currencyList[sourceCurrency].currencySymbol}1</span> =
          <span>
            {currencyList[targetCurrency].currencySymbol}
            {data.rates[targetCurrency] || null}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ExchangeFormRatioInfo;
