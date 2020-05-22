import React from "react";
import ReactDOM from "react-dom";
import "style/index.less";
import * as serviceWorker from "./serviceWorker";
import { configure } from "mobx";
import moment from "moment";
import routes from "./route";
import store from "./store";
import App from "./component/App";

// 设置moment语言
moment.locale("zh-cn");

// 设置mobx校验必须通过action更新数据
configure({
  enforceActions: "always",
});

ReactDOM.render(
  <App store={store} history={store.router.history} routes={routes} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
