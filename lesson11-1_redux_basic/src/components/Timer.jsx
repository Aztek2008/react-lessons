import React from "react";
import { connect } from "react-redux";
import timerActions from "../redux/timer/timerActions";
import s from "./Timer.module.css";

const Timer = ({ value, step, onDecrement, onIncrement }) => (
  <div className={s.timerContainer}>
    <button
      className={s.timerButton}
      type="button"
      onClick={() => onDecrement(step)}
    >
      &#8722;
    </button>
    <div>{value}</div>
    <button
      className={s.timerButton}
      type="button"
      onClick={() => onIncrement(step)}
    >
      &#43;
    </button>
  </div>
);

const mapStateToProps = (state) => {
  // МОЖНО ПЕРЕДАВАТЬ БЕЗ RETURN, ЕСЛИ НЕ НУЖНЫ ВЫЧИСЛЕНИЯ ИЛИ КОНСОЛИ ПЕРЕД ЭТИМ
  return {
    value: state.timer.value,
    step: state.timer.step,
  };
};

const mapDispatchToProps = {
  onDecrement: timerActions.decrement,
  onIncrement: timerActions.increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
