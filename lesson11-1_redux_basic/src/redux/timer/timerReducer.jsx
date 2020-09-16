import { combineReducers } from "redux";
import { INCREMENT, DECREMENT, CHANGE_STEP } from "./timerTypes";

const valueReducer = (state = 0, action) => {
  switch (action.type) {
    case DECREMENT:
      return state - action.payload.value;

    case INCREMENT:
      return state + action.payload.value;

    default:
      return state;
  }
};

const stepReducer = (state = 5, action) => {
  switch (action.type) {
    case CHANGE_STEP:
      return action.payload.step;

    default:
      return state;
  }
};

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
