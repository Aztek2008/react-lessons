import React from "react";
import { connect } from "react-redux";
import tasksActions from "../redux/tasks/tasksActions";

const TaskListItem = ({ text, completed, onRemove, onToggleCompleted }) => {
  const clx = ["TaskList-item"];

  if (completed) {
    clx.push("completed");
  }

  return (
    <li className={clx.join(" ")}>
      <p className="TaskList-text">{text}</p>

      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggleCompleted}
        />
        Completed
      </label>

      <section className="TaskList-actions">
        <button type="button" className="TaskList-button" onClick={onRemove}>
          Удалить
        </button>
      </section>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = state.tasks.items.find((item) => item.id === ownProps.id);

  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(tasksActions.removeTask(ownProps.id)),
  onToggleCompleted: () => dispatch(tasksActions.toggleCompleted(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListItem);

// text={text}
// completed={completed}
// onRemove={() => onRemoveTask(id)}
// onUpdate={() => onToggleCompleted(id)}

// const mapDispatchToProps = {
//   onRemoveTask: tasksActions.removeTask,
//   onToggleCompleted: tasksActions.toggleCompleted,
// };
