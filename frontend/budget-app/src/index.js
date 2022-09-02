import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./reducers/transactionReducer";
import App from "./App";
import "./styles/color.css"

const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
