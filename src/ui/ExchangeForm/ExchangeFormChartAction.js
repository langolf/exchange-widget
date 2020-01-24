import React from 'react';
import Icon from 'ui/Icon/Icon';
import { ReactComponent as IconRiseChart } from './icon-rise-chart.svg';
import style from './ExchangeForm.module.css';
import { useAppContext, CurrencyTypes } from 'hooks/app-context';
import { Link } from 'react-router-dom';

const ExchangeFormChartAction = props => {
  const { state, dispatch } = useAppContext();

  return (
    <div className={style.chart} onClick={props.onClick}>
      <div className={style.chartIcon}>
        <Icon>
          <IconRiseChart />
        </Icon>
      </div>
      <span>
        {CurrencyTypes[state.exchange[0].code].sign}1 = {CurrencyTypes[state.exchange[1].code].sign}
        {props.ratio}
      </span>
    </div>
  );
};

export default ExchangeFormChartAction;
