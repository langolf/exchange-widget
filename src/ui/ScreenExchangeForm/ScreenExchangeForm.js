import React, { useState } from 'react';
import Screen from 'ui/Screen/Screen';
import ExchangeForm from 'ui/ExchangeForm/ExchangeForm';
import ScreenChart from 'ui/ScreenChart/ScreenChart';
import { useTransition, animated, useSpring } from 'react-spring';
import { ReactComponent as IconBack } from './icon-back.svg';
import Icon from 'ui/Icon/Icon';

const ScreenExchangeForm = props => {
  const [isChart, setChart] = useState(false);
  const move = useSpring({
    transform: isChart ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)',
  });

  return (
    <Screen
      onClickClose={() => {
        if (isChart) {
          setChart(true);
        } else {
          window.location = '/';
        }
      }}
      title={!isChart ? 'Exchange' : 'GBP => EUR'}
      closeIcon={isChart ? <IconBack /> : null}
      styles={{ backgroundColor: '#F3F4F5' }}
    >
      <animated.div
        style={{
          position: 'relative',
          ...move,
        }}
      >
        <ExchangeForm
          onClickChartAction={() => {
            setChart(true);
          }}
        />
        <ScreenChart
          onClick={() => {
            setChart(false);
          }}
        />
      </animated.div>
    </Screen>
  );
};
export default ScreenExchangeForm;
