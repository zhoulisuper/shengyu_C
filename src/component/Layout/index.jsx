import React from "react";
import { Switch, Route } from "react-router-dom";
import { observer, inject } from "mobx-react";

/*
 * 项目最外层组件，负责监听事件
 * */
const AppLayout = ({ routes, store: { router } }) => (
  <Switch location={router.location}>
    {routes.map((r) => (
      <Route {...r} />
    ))}
  </Switch>
);

export default inject("store")(observer(AppLayout));
