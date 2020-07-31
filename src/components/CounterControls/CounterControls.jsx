import React from 'react';

const CounterControls = ({ onIncrement, onDecrement }) => (
  <div>
    <div>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>

      <button type="button" onClick={onIncrement}>
        Increment
      </button>
    </div>
  </div>
);

export default CounterControls;
