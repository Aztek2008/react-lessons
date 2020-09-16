import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/tasksReducers";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;

//
//=================  PREVSTORE  =======
// import { createStore, combineReducers } from "redux";
// import tasksReducer from "./tasks/tasksReducers";

// const rootReducer = combineReducers(tasksReducer);

// const store = createStore(rootReducer, window_REUX_DEVTOOL...);

// export default store;
