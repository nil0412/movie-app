import React from "react";
import ReactDOM from "react-dom/client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import "./index.css";
import App from "./components/App";
import { movies, search } from "./reducers";
import { Provider } from "react-redux";

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

// export const StoreContext = createContext();

// console.log("StoreContex: ", StoreContext);

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// const connectedAppComponent = connect(callback)(App);
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unSubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }
//       componentWillUnmount(){
//         this.unSubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);
//         return (
//           <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
//         );
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => <ConnectedComponent store={store} />}
//           </StoreContext.Consumer>
//         );
//       }
//     }

//     return ConnectedComponentWrapper;
//   };
// }

// console.log("Before store.getState: ", store.getState());
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name: 'Superman'}]
// });
// console.log('After store.getState: ', store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
