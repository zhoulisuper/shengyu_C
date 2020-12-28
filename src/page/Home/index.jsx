import React from "react";
import Header from "component/Header";
import s from "./style.module.less";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header title="首页" />
        <img alt="logo" src="/asset/image/logo.png" />
        <div className={s.logo}></div>
      </div>
    );
  }
}

export default Home;
