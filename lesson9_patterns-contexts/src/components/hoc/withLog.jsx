import React, { Component } from "react";

const withLog = (WrappedComponent) => {
  return class withLog extends Component {
    componentDidMount() {
      console.group(`WithLog ouput @${WrappedComponent.name}`);
      console.log("WrappedComponent:", WrappedComponent);
      console.log(this.props);
      console.groupEnd();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLog;
