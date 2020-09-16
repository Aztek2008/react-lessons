import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import tasksActions from "./tasksActions";

const addTask = (state, action) => {
  return [...state, action.payload.task];
};
const removeTask = (state, action) => {
  return state.filter((task) => task.id !== action.payload);
};
const toggleCompleted = (state, action) => {
  return state.map((task) => {
    return task.id === action.payload
      ? { ...task, completed: !task.completed }
      : task;
  });
};

const itemsReducer = createReducer([], {
  [tasksActions.addTask]: addTask,
  [tasksActions.removeTask]: removeTask,
  [tasksActions.toggleCompleted]: toggleCompleted,
});

const changeFilter = (state, action) => {
  return action.payload;
};

const filterReducer = createReducer("", {
  [tasksActions.changeFilter]: changeFilter,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

//=========================  PREV REDUCERS =============================

// import { combineReducers } from "redux";
// import tasksActions from "./tasksActions";

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case tasksActions.addTask.type: // ТУТ НЕМНОГО ВЕРНУТЬ НУЖНО БУДЕТ ACTIONTYPES
//       return [...state, payload.task];
//     // STATE ТУТ ЭТО СВ-ВО в export default combineReducers({ - У КАЖДОГО РЕДЬЮСЕРА СВОЙ (ITEMS OR FILTER)

//     case tasksActions.removeTask.type:
//       return state.filter((task) => task.id !== payload);

//     case tasksActions.toggleCompleted.type:
//       return state.map((task) =>
//         task.id === payload ? { ...task, completed: !task.completed } : task
//       );

//     default:
//       return state;
//   }
// };

// // { type, payload } = action
// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case tasksActions.changeFilter.type:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });
