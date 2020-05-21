import React from "react";
import { Button, Tabs, Badge } from "antd-mobile";
import "./App.css";

function App() {
  const tabs = [
    { title: <Badge text={"3"}>First Tab</Badge> },
    { title: <Badge text={"今日(20)"}>Second Tab</Badge> },
    { title: <Badge dot>Third Tab</Badge> },
  ];
  return (
    <div className="App">
      <Button type="primary" inline size="small">
        按钮
      </Button>
      <Tabs
        tabs={tabs}
        initialPage={1}
        onChange={(tab, index) => {
          console.log("onChange", index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log("onTabClick", index, tab);
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
            backgroundColor: "#fff",
          }}
        >
          Content of first tab
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
            backgroundColor: "#fff",
          }}
        >
          Content of second tab
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
            backgroundColor: "#fff",
          }}
        >
          Content of third tab
        </div>
      </Tabs>
    </div>
  );
}

export default App;
