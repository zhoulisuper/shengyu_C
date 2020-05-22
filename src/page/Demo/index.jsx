import React from "react";
import { Button } from "antd-mobile";
import { Link } from "react-router-dom";
import s from "./style.module.less";

const App = () => {
  return (
    <div className="App">
      <header className={s.container}>
        <Button type="primary" inline size="small">
          <Link to="/demo2">demo2</Link>
        </Button>
      </header>
    </div>
  );
};

export default App;
