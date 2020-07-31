import React, { Component } from 'react';

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
        <button type="button" onClick={this.handleDecrement}>
          Decrement
        </button>

        <span>{this.state.value}</span>

        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}
