//====================
// Static composition
//====================

import React from "react";
// import withHigherOrderComponent from "../components/hoc/withHigherOrderComponent";
// import withLog from "../components/hoc/withLog";
import withToggle from "./hoc/withToggle";

const MyComponent = (props) => <div>{JSON.stringify(props, null, 2)}</div>;

export default withToggle(MyComponent);
