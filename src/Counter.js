import React, { PureComponent } from 'react'
import { connect } from 'react-redux';

const displayAsCol = {
  display: 'flex',
  flexDirection: 'column',
}

const displayAsRow = {
  display: 'flex',
  alignItems: 'center',
  marginTop: 40,
  marginBottom: 40,
}

const styleTitle = {
  textAlign: 'center',
  margin: 0,
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

  forceError = () => {
    this.props.dispatch({
      type: 'THROW_ERROR',
      errorMsg: 'Nothing, just test this catcher. Having fun!',
    })
  }

  render() {
    return (
      <div style={displayAsCol}>
        <h2 style={styleTitle}>Counter</h2>
        <div style={displayAsRow}>
          <button onClick={this.decrease}>-</button>
          <div style={styleCount}>{this.props.cnt}</div>
          <button onClick={this.increase}>+</button>
        </div>
        <button onClick={this.forceError}>kick an error!</button>
      </div>
    )
  }
}

export default connect(state => ({
  cnt: state.counter.cnt
}))(Counter)
