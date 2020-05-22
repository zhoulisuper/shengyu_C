import React from "react";
import { Button } from "antd-mobile";
import { Link } from "react-router-dom";
import s from "./style.module.less";

class Demo extends React.Component {
  render() {
    return (
      <div className="App">
        <header className={s.container}>
          <Button type="primary" inline size="small">
            按钮
          </Button>
          <div style={{ height: "100px" }}>
            <Link to="/demo2">demo2</Link>
          </div>
        </header>
      </div>
    );
  }
}

export default Demo;
