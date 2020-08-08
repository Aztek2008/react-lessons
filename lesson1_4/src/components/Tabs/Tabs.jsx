import React, { Component } from 'react';

export default class Tabs extends Component {
  state = {
    activeIdx: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    // PREVENT SAME TAB RE-RENDER. BE AWARE OF ADVISABILITY AT SMALL APPS
    return nextState.activeIdx !== this.state.activeIdx;
  }

  setActiveIndex = idx => {
    this.setState({
      activeIdx: idx,
    });
  };

  render() {
    console.log(`Re render @ ${Date.now()}`);

    const tab = this.props.items[this.state.activeIdx];

    return (
      <>
        <div>
          {this.props.items.map((item, idx) => (
            <button
              className="TaskEditor-button"
              type="button"
              key={item.label}
              onClick={() => this.setActiveIndex(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div style={{ width: 600 }}>
          <h2>{tab.label}</h2>
          <p>{tab.content}</p>
        </div>
      </>
    );
  }
}
