import Loadable from "react-loadable";
import loading from "./component/Loading";

// 默认路由页面
const Demo = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "./page/Demo"),
  loading,
});

const routes = [
  {
    key: "demo",
    path: "/",
    exact: true,
    component: Demo,
  },
  {
    key: "demo",
    path: "/demo",
    exact: true,
    component: Demo,
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
