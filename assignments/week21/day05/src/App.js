
import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick={this.props.updateBonus}>+100</button>
        <button onClick={this.props.levelCompleted}>+500</button>
        <button onClick={this.props.lifeLost}>-250</button>
      </div>
    )
  }
}

const mapToDispatch = dispatch => {
  return {
    updateBonus: () => dispatch({ type: 'UPDATE_BONUS', value: 100 }),
    levelCompleted: () => dispatch({ type: 'LEVEL_COMPLETED', value: 500 }),
    lifeLost: () => dispatch({ type: 'LIFE_LOST', value: 250 })
  }
}


const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, mapToDispatch)(App);
