import React, { Component } from 'react';

const Subscription = {
  FREE: 'free',
  PRO: 'pro',
  PREMIUM: 'premium',
};

export default class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    agreed: false,
    subscription: null,
    age: '',
    // inputValue: '',
  };
  // handleInputChange = e => {
  //   this.setState({ inputValue: e.target.value });
  // };

  // handleImailChange = e => {
  //   this.setState({ email: e.target.value });
  // };

  // handlePassChange = e => {
  //   this.setState({ password: e.target.value });
  // };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleAggreedChange = e => {
    this.setState({ agreed: e.target.checked });
  };

  handleSubscriptionChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleAgeChange = e => {
    this.setState({
      age: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit!');
  };

  render() {
    const { email, password, agreed, subscription, age } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          E-mail
          <input
            type="email"
            value={email}
            onChange={this.handleChange}
            name="email"
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={this.handleChange}
            name="password"
          />
        </label>
        <br />
        <label>
          Aggree on everithing!
          <input
            type="checkbox"
            name="checkbox"
            checked={agreed}
            onChange={this.handleAggreedChange}
          />
        </label>
        <br />
        <div role="group">
          <label>
            <input
              type="radio"
              name="subscription"
              value={Subscription.FREE}
              checked={Subscription.FREE === subscription}
              onChange={this.handleSubscriptionChange}
            />
            Free
          </label>
          <label>
            <input
              type="radio"
              name="subscription"
              value={Subscription.PRO}
              checked={Subscription.PRO === subscription}
              onChange={this.handleSubscriptionChange}
            />
            Pro
          </label>
          <label>
            <input
              type="radio"
              name="subscription"
              value={Subscription.PREMIUM}
              checked={Subscription.PREMIUM === subscription}
              onChange={this.handleSubscriptionChange}
            />
            Premium
          </label>
        </div>
        <br />
        <label>
          Choose your Age
          <select name="age" value={age} onChange={this.handleAgeChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="25-50">25-50</option>
            <option value="50-100">50-100</option>
            <option value="100+">100+</option>
          </select>
        </label>
        <br />
        <button type="submit" disabled={!agreed}>
          Register
        </button>
      </form>

      // <div>
      //   <input
      //     type="text"
      //     value={this.state.inputValue}
      //     onChange={this.handleInputChange}
      //   />
      // </div>
    );
  }
}
