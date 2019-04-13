import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './Counter'

import './App.css';

const initState = {
  cnt: 0,
};

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
  }

  return state
};

const store = createStore(reducer);

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
