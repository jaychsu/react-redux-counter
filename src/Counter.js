import React, { PureComponent } from 'react'
import { connect } from 'react-redux';

const displayAsRow = {
  display: 'flex',
  alignItems: 'center',
}

const styleTitle = {
  textAlign: 'center',
}

const styleCount = {
  marginLeft: 20,
  marginRight: 20,
  fontSize: 40,
}

class Counter extends PureComponent {
  static MAXCNT = 20;
  static MINCNT = 0;

  increase = () => {
    if (this.props.cnt < Counter.MAXCNT) {
      this.props.dispatch({ type: 'INC' })
    }
  };

  decrease = () => {
    if (this.props.cnt > Counter.MINCNT) {
      this.props.dispatch({ type: 'DEC' })
    }
  };

  render() {
    return (
      <div>
        <h2 style={styleTitle}>Counter</h2>
        <div style={displayAsRow}>
          <button onClick={this.decrease}>-</button>
          <div style={styleCount}>{this.props.cnt}</div>
          <button onClick={this.increase}>+</button>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  cnt: state.cnt
}))(Counter)
