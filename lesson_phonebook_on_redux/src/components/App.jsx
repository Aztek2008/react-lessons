import React from "react";
import { connect } from "react-redux";

import Layout from "./Layout/Layout";
import TaskList from "./TaskList/TaskList";
import TaskEditor from "./TaskEditor/TaskEditor";
import Filter from "./Filter";

const App = (state) => {
  return (
    <Layout>
      <TaskEditor />
      {state.tasks.length > 1 && <Filter />}
      <TaskList />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  // console.log("state", state);

  return {
    tasks: state.tasks.items,
  };
};

export default connect(mapStateToProps)(App);
