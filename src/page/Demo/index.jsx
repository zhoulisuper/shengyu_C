import React from "react";
import { Button } from "antd-mobile";
import s from "./style.m.less";

const App = () => {
  return (
    <div className="App">
      <header className={s.container}>
        <Button type="primary" inline size="small">
          按钮
        </Button>
      </header>
    </div>
  );
};

export default App;
