import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { Swicth, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import store from "./store";
import App from "./App";
import Home from "./pages/home/HomeContainer";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
