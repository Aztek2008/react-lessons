import React from "react";
import { connect } from "react-redux";
import tasksActions from "../redux/tasks/tasksActions";

const Filter = ({ value, onChangeFilter }) => (
  <div style={{ width: 600 }}>
    <input
      type="text"
      className="TaskEditor-input"
      value={value}
      onChange={(e) => onChangeFilter(e.target.value)}
    />
  </div>
);

const mapStateToProps = (state) => ({
  value: state.tasks.filter,
});

const mapDispatchToProps = {
  onChangeFilter: tasksActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// value={filter} onChangeFilter={this.changeFilter}
