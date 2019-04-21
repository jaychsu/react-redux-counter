import React, { PureComponent } from 'react'
import { connect } from 'react-redux';

const displayAsCol = {
  display: 'flex',
  flexDirection: 'column',
}

const displayAsRow = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 20,
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

// action
function fetchMotto() {
  return dispatch => fetch('https://api.github.com/zen')
    .then(res => res.text())
    .then(motto => dispatch({ type: 'FETCH_MOTTO', motto }))
}

class Counter extends PureComponent {
  static MAXCNT = 20;
  static MINCNT = 0;

  timer = {
    type: '',
    intv: null,
  };

  resetTimer = () => {
    if (!this.timer.type) { return }
    clearInterval(this.timer.intv)
    this.timer = {
      type: '',
      intv: null,
    }
  }

  increase = () => {
    if (this.props.cnt < Counter.MAXCNT) {
      this.props.dispatch({ type: 'INC' })
      this.props.dispatch(fetchMotto())
    }
  };

  increasePerSec = () => {
    if (this.timer.type === 'INC') { return }

    this.increase()
    this.resetTimer()

    this.timer = {
      type: 'INC',
      intv: setInterval(() => {
        this.increase()
        if (this.props.cnt >= Counter.MAXCNT) {
          this.resetTimer()
        }
      }, 1000),
    }
  };

  decrease = () => {
    if (this.props.cnt > Counter.MINCNT) {
      this.props.dispatch({ type: 'DEC' })
      this.props.dispatch(fetchMotto())
    }
  };

  decreasePerSec = () => {
    if (this.timer.type === 'DEC') { return }

    this.decrease()
    this.resetTimer()

    this.timer = {
      type: 'DEC',
      intv: setInterval(() => {
        this.decrease()
        if (this.props.cnt <= Counter.MINCNT) {
          this.resetTimer()
        }
      }, 1000),
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
      <div style={{
        ...displayAsCol,
        width: 150,
      }}>
        <h2 style={styleTitle}>Counter</h2>
        <div>{this.props.motto}</div>
        <div style={displayAsRow}>
          <button onClick={this.decrease}>-</button>
          <div style={styleCount}>{this.props.cnt}</div>
          <button onClick={this.increase}>+</button>
        </div>
        <div style={displayAsRow}>
          <button onClick={this.decreasePerSec}>-1/s</button>
          <button onClick={this.increasePerSec}>+1/s</button>
        </div>
        <button onClick={this.forceError}>kick an error!</button>
      </div>
    )
  }
}

export default connect(state => ({
  cnt: state.counter.cnt,
  motto: state.motto,
}))(Counter)
