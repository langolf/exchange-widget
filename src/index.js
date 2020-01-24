import React from 'react';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import 'currency-flags/dist/currency-flags.css';
import { render } from 'react-dom';
import './index.css';
import { useSpring, animated, useTransition } from 'react-spring';
import { BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';
import ScreenExchangeForm from './ui/ScreenExchangeForm/ScreenExchangeForm';
import { AppProvider, useAppContext } from 'hooks/app-context';
import ScreenStart from 'ui/ScreenStart/ScreenStart';

export default function App() {
  const { state, dispatch } = useAppContext();
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0.8, transform: 'translate3d(0,50%,0) scale(1.6)' },
    enter: { opacity: 1, transform: 'translate3d(0,2%,0) scale(1)' },
    leave: { opacity: 0.8, transform: 'translate3d(0,-4%,0) scale(0.8)' },
  });

  return (
    <AppProvider>
      <div className="app">
        {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={{ position: 'fixed', width: '100vw', height: '100vh', ...props }}>
            <Switch location={location}>
              <Route path="/" exact>
                <ScreenStart />
              </Route>

              <Route path="/exchange" exact>
                <ScreenExchangeForm />
              </Route>
            </Switch>
          </animated.div>
        ))}
      </div>
    </AppProvider>
  );
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
