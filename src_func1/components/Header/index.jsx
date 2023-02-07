import React, { useState } from "react";
import "./index.css";
import { nanoid } from "nanoid";

export default function Header(props) {
  // 增加一条信息
  const handleAddMsg = (e) => {
    let obj = {};
    if (e.key !== "Enter") return;
    if (e.target.value.trim() === "") return;

    obj = { name: e.target.value, age: 18, id: nanoid(), done: false };

    props.addMsg(obj);

    e.target.value = "";
  };

  return (
    <div className="todo-header">
      <input
        onKeyUp={handleAddMsg}
        type="text"
        placeholder="请输入你的任务名称，按回车键确认"
      />
    </div>
  );
}
