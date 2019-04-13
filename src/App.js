import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Counter from './Counter'

import './App.css';

const initState = {
  cnt: 0,
};

/**
 * import { createStore, combineReducers, applyMiddleware } from 'redux'
 *
 * const todoApp = combineReducers(reducers)
 * const store = createStore(
 *   todoApp,
 *   // applyMiddleware() tells createStore() how to handle middleware
 *   applyMiddleware(logger, crashReporter)
 * )
 */
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        cnt: Math.min(state.cnt + 1, Counter.MAXCNT),
      }
    case 'DEC':
      return {
        ...state,
        cnt: Math.max(state.cnt - 1, Counter.MINCNT),
      }
    default:
      return state
  }
};

const logger = store => next => action => {
  console.log('dispatching', action)
  const res = next(action)
  console.log('next state', store.getState())
  return res
}

const errorCatcher = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    throw err
  }
}

const store = createStore(reducer, applyMiddleware(logger, errorCatcher));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{
          width: '100%',
          height: '100%',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
