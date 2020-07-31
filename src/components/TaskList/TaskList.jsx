import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onRemoveTask }) => (
  <ul className="TaskList">
    {tasks.map(({ id, text }) => (
      <li key={id} className="TaskList-item">
        <p className="TaskList-text">{text}</p>

        <section className="TaskList-actions">
          <button
            className="TasList-button"
            type="button"
            onClick={() => onRemoveTask(id)}
          >
            Delete Task
          </button>
        </section>
      </li>
    ))}
  </ul>
);

export default TaskList;
