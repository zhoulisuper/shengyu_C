import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "component/App";
import Demo from "page/Demo";
import Demo2 from "page/Demo2";

class Router extends Component {
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
          <Route path="/demo2" component={Demo2} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;
