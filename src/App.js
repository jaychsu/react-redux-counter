import React, { Component } from 'react';
import './App.css';

import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Counter />
      </div>
    );
  }
}

export default App;
