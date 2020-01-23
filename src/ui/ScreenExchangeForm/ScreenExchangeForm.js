import React, { useState } from 'react';
import Screen from 'ui/Screen/Screen';
import ExchangeForm from 'ui/ExchangeForm/ExchangeForm';
import ScreenChart from 'ui/ScreenChart/ScreenChart';
import { useTransition, animated } from 'react-spring';

const ScreenExchangeForm = props => {
  const [isChart, setChart] = useState(false);
  const transitions = useTransition(isChart, null, {
    from: { transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 1, transform: 'translate3d(120%,0,0)' },
  });
  return (
    <Screen title={!isChart ? 'Exchange' : 'GBP => EUR'}>
      {transitions.map(({ item, key, props }) => (
        <animated.div
          key={key}
          style={{
            ...props,
          }}
        >
          {!item ? (
            <ExchangeForm
              onClickChartAction={() => {
                setChart(true);
              }}
            />
          ) : (
            <ScreenChart
              onClick={() => {
                setChart(false);
              }}
            />
          )}
        </animated.div>
      ))}
    </Screen>
  );
};
export default ScreenExchangeForm;
