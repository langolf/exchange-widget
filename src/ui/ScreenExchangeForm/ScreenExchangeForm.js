import React, { useState } from 'react';
import Screen from 'ui/Screen/Screen';
import ExchangeForm from 'ui/ExchangeForm/ExchangeForm';
import ScreenChart from 'ui/ScreenChart/ScreenChart';
import { animated, useSpring } from 'react-spring';
import { ReactComponent as IconBack } from './icon-back.svg';
import Icon from 'ui/Icon/Icon';

const ScreenExchangeForm = props => {
  const [isChart, setChart] = useState(false);
  const move = useSpring({
    transform: isChart ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)',
  });

  return (
    <Screen
      closeNavElement={
        isChart ? (
          <Icon
            onClick={() => setChart(false)}
            style={{ position: 'absolute', width: 14, left: 20, transform: 'translateY(-50%)', top: '50%' }}
          >
            <IconBack />
          </Icon>
        ) : null
      }
      title={!isChart ? 'Exchange' : 'GBP => EUR'}
      styles={{ backgroundColor: '#F3F4F5' }}
    >
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
