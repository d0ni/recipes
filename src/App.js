import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import history from "./history";
import { HomePage } from "./pages/HomePage";

function App() {
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:catalog" component={RegisterPage} />
      <Route path="/product/:id" component={Product} />
    </Switch>
  </BrowserRouter>;
  return <HomePage />;
}

export default App;
