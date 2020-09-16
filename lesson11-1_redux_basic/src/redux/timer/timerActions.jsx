import { INCREMENT, DECREMENT, CHANGE_STEP } from "./timerTypes";

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: { value },
  };
};

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: { value },
  };
};

const changeStep = (step) => {
  return {
    type: CHANGE_STEP,
    payload: {
      step: Number(step),
    },
  };
};

export default { decrement, increment, changeStep };
