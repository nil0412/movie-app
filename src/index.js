import React from "react";
import ReactDOM from "react-dom/client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import "./index.css";
import App from "./components/App";
import { movies, search } from "./reducers";

const rootReducer = combineReducers({
  movies,
  search,
});

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("ACTION TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

// const logger =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     //middleware code
//     // console.log("ACTION TYPE = ", action.type);
//     next(action);
//   };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     //middleware code
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
});
console.log("Before store.getState: ", store.getState());
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name: 'Superman'}]
// });
// console.log('After store.getState: ', store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
