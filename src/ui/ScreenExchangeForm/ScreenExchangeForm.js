import React, { useState } from 'react';
import Screen from 'ui/Screen/Screen';
import ExchangeForm from 'ui/ExchangeForm/ExchangeForm';
import ScreenChart from 'ui/ScreenChart/ScreenChart';
import { animated, useSpring } from 'react-spring';
import { ReactComponent as IconBack } from './icon-back.svg';

const ScreenExchangeForm = props => {
  const [isChart, setChart] = useState(false);
  const move = useSpring({
    transform: isChart ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)',
  });

  return (
    <Screen title={!isChart ? 'Exchange' : 'GBP => EUR'} styles={{ backgroundColor: '#F3F4F5' }}>
      <animated.div
        style={{
          position: 'relative',
          width: '100%',
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
