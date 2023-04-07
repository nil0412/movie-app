import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import "./index.css";
import App from "./components/App";
import movies from "./reducers";

const reducer = {
  movies
}

const store = configureStore({reducer});
console.log('store: ', store);  
// console.log('Before store.getState: ', store.getState()); 
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name: 'Superman'}]
// }); 
// console.log('After store.getState: ', store.getState()); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);
