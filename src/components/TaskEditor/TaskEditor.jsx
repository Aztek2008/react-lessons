import React from 'react';

const TaskEditor = ({ onAddTask }) => (
  <div className="TaskEditor">
    <button type="button" onClick={onAddTask}>
      Add Task
    </button>
  </div>
);

export default TaskEditor;
