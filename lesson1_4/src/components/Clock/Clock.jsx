import React, { Component } from 'react';
import styles from './Clock.module.css';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intevalId = null;

  componentDidMount() {
    this.intevalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intevalId);
  }

  render() {
    return <div className={styles.Clockface}>{this.state.time}</div>;
  }
}
