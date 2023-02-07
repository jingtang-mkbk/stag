import React, { useState } from "react";
import "./index.css";

export default function Item(props) {
  const [mouse, setMouse] = useState(false);

  const { msg, listCheck, listDel } = props;

  const handleCheck = (id) => {
    return () => {
      listCheck(id);
    };
  };
  const isMouseEnter = (flag) => {
    return () => {
      setMouse(flag);
    };
  };
  const delOneMsg = (id) => {
    return () => {
      listDel(id);
    };
  };

  return (
    <li
      style={{ backgroundColor: mouse ? "#ddd" : "#fff" }}
      onMouseEnter={isMouseEnter(true)}
      onMouseLeave={isMouseEnter(false)}
    >
      <label>
        <input
          type="checkbox"
          checked={msg.done}
          onChange={handleCheck(msg.id)}
        />
        <span>{msg.name}</span>
      </label>
      <button
        className="btn btn-danger"
        style={{ display: mouse ? "block" : "none" }}
        onClick={delOneMsg(msg.id)}
      >
        删除
      </button>
    </li>
  );
}
