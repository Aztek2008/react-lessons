import React from "react";
import { connect } from "react-redux";
// import tasksActions from "../../redux/tasks/tasksActions";
import TaskListItem from "../TaskListItem";

import "./TaskList.css";

// const TaskList = ({ tasks, onRemoveTask, onToggleCompleted }) => (
const TaskList = ({ tasks }) => (
  <ul className="TaskList">
    {tasks.map(({ id }) => (
      <TaskListItem
        key={id}
        id={id}
        // text={text}
        // completed={completed}
        // onRemove={() => onRemoveTask(id)}
        // onUpdate={() => onToggleCompleted(id)}
      />
    ))}
  </ul>
);

const mapStateToProps = (state) => {
  const { items, filter } = state.tasks;
  const lowerCaseFilter = filter.toLowerCase();

  const visibleTasks = items.filter((task) =>
    task.text.toLowerCase().includes(lowerCaseFilter)
  );

  return {
    tasks: visibleTasks,
  };
};

// const mapDispatchToProps = {
//   onRemoveTask: tasksActions.removeTask,
//   onToggleCompleted: tasksActions.toggleCompleted,
// };

export default connect(mapStateToProps)(TaskList);
// export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
