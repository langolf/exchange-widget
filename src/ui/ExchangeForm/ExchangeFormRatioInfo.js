import React from 'react';
import Icon from 'ui/Icon/Icon';
import { ReactComponent as IconRiseChart } from './icon-rise-chart.svg';
import style from './ExchangeForm.module.css';
import { useAppContext } from 'hooks/app-context';
import currencyList from 'hooks/currencies';
import { Link } from 'react-router-dom';
import useFetch from 'react-fetch-hook';

const ExchangeFormRatioInfo = ({ onClick }) => {
  const { state, dispatch } = useAppContext();

  // todo: separate hook
  const { isLoading, data } = useFetch(
    `https://api.exchangeratesapi.io/latest?&base=${state.exchangeNew[0].currency}&symbols=${state.exchangeNew[1].currency}`
  );

  return isLoading ? (
    <div>...</div>
  ) : (
    <div className={style.chartLine} onClick={onClick}>
      <div className={style.chartIcon}>
        <Icon>
          <IconRiseChart />
        </Icon>
      </div>
      <span>
        {currencyList[state.exchangeNew[0].currency].currencySymbol}1 ={' '}
        {currencyList[state.exchangeNew[1].currency].currencySymbol}
        {data.rates[state.exchangeNew[1].currency]}
      </span>
    </div>
  );
};

export default ExchangeFormRatioInfo;
