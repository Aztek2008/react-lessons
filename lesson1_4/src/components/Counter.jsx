import React, { Component } from 'react';
import CounterControls from './CounterControls/CounterControls';

export default class Counter extends Component {
  static propTypes = {};
  static defaultProps = { initialValue: 0, step: 1 };

  // constructor(...args) {
  //   super(...args);
  //   this.state = {
  //     value: this.props.initialValue,
  //   };
  // }
  // SAME AS BELOW //

  state = {
    value: this.props.initialValue,
  };

  // PUBLIC CLASSFIELDS //
  handleIncrement = () => {
    this.setState((prevState, props) => {
      return {
        value: this.state.value + props.step,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState, props) => {
      return {
        value: this.state.value - props.step,
      };
    });
  };

  render() {
    return (
      <div>
        <CounterControls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <span>{this.state.value}</span>
      </div>
    );
  }
}
