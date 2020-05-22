import React from "react";
import { NavBar, Icon } from "antd-mobile";
import { observer } from "mobx-react";

@observer
class Header extends React.Component {
  render() {
    const title = this.props.title;
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
        {title}
      </NavBar>
    );
  }
}

export default Header;
