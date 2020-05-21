import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Demo from "./views/Demo";

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/demo" component={Demo} />
        </Switch>
      </HashRouter>
    );
  }
}

export default AppRouter;
