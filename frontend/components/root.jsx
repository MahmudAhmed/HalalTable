import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Router } from "react-router-dom";
import App from "./App";
import history from "./history";


const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
};

export default Root;
