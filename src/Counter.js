import React, { PureComponent } from 'react'

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

export default class Counter extends PureComponent {
  MAXCNT = 20
  MINCNT = 0

  state = {
    cnt: 0
  }

  increase = () => this.setState({ cnt: Math.min(this.state.cnt + 1, this.MAXCNT) })

  decrease = () => this.setState({ cnt: Math.max(this.state.cnt - 1, this.MINCNT) })

  render() {
    return (
      <div>
        <h2 style={styleTitle}>Counter</h2>
        <div style={displayAsRow}>
          <button onClick={this.decrease}>-</button>
          <div style={styleCount}>{this.state.cnt}</div>
          <button onClick={this.increase}>+</button>
        </div>
      </div>
    )
  }
}
