import Loadable from "react-loadable";
import loading from "./component/Loading";

// 默认路由页面
const TabNav = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "./page/TabNav"),
  loading,
});

const routes = [
  {
    key: "home",
    path: "/",
    exact: true,
    component: TabNav,
  },
  {
    key: "home",
    path: "/home",
    exact: true,
    component: TabNav,
  },
  {
    key: "demo2",
    exact: true,
    component: Loadable({
      loader: () => import("./page/Demo2"),
      loading,
    }),
    path: "/demo2",
  },
];

export default routes;
