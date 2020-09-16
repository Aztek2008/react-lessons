import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addTask = createAction("tasks/add", (text) => ({
  payload: {
    task: {
      id: uuidv4(),
      text, // shorthand property
      completed: false,
    },
  },
}));

const removeTask = createAction("tasks/remove");
const toggleCompleted = createAction("tasks/toggleCompleted");
const changeFilter = createAction("tasks/changeFilter");

export default { addTask, removeTask, toggleCompleted, changeFilter };

//  ===================  PREV ACTIONS =====================

// const addTask = (text) => ({
//   type: actionTypes.ADD,
//   payload: {
//     task: {
//       id: uuidv4(),
//       text, // shorthand property
//       completed: false,
//     },
//   },
// });

// const removeTask = (taskId) => ({
//   type: actionTypes.REMOVE,
//   payload: {
//     taskId, // shorthand property
//   },
// });

// const toggleCompleted = (taskId) => ({
//   type: actionTypes.TOGGLE_COMPLETED,
//   payload: {
//     taskId, // shorthand property
//   },
// });

// const changeFilter = (filter) => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: {
//     filter, // shorthand property
//   },
// });
