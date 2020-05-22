import React from "react";
import classnames from "classnames";
import style from "./style.module.less";

const Loading = ({ text }) => {
  return (
    <div className={style.loading}>
      <div className={style.foldingCube}>
        <div className={classnames(style.cube, style.cube1)} />
        <div className={classnames(style.cube, style.cube2)} />
        <div className={classnames(style.cube, style.cube4)} />
        <div className={classnames(style.cube, style.cube3)} />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default Loading;
