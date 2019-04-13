import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import Counter from './Counter'

import './App.css';

const env = (state = {
  errorMsg: '',
}, action) => {
  if (action.type === 'THROW_ERROR') {
    return {
      ...state,
      errorMsg: action.errorMsg,
    }
  }

  return state
}

const counter = (state = {
  cnt: 0,
}, action) => {
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
    const res = next(action)
    const state = store.getState()

    if (state.env.errorMsg) { throw new Error(state.env.errorMsg) }

    return res
  } catch (err) {
    throw err
  }
}

const store = createStore(
  combineReducers({ env, counter }),
  applyMiddleware(logger, errorCatcher)
);

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
