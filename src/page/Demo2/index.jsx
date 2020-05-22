import React from "react";
import { NavBar, Icon } from "antd-mobile";
import { Link } from "react-router-dom";
// import s from "style.module.less";

class Demo2 extends React.Component {
  render() {
    return (
      <div>
        <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>
          Basic
        </NavBar>
        <Link to="/home">home</Link>
      </div>
    );
  }
}

export default Demo2;
