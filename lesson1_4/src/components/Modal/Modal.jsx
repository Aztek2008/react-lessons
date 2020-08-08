import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Mount');
    console.log('addEventListener added');
    window.addEventListener('keydown', this.handleEscDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscDown);
  }

  handleEscDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.Backdrop}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>
    );
  }
}
