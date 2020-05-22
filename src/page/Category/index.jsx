import React from "react";
import { NavBar, Icon } from "antd-mobile";

class Category extends React.Component {
  render() {
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log("onLeftClick")}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        分类
      </NavBar>
    );
  }
}

export default Category;
