import React from 'react';
import './TaskEditor/TaskEditor.css';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        className="TaskEditor-input"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
