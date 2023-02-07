import React from "react";
import Item from "../Item";
import "./index.css";

export default function List(props) {
  const { msg, setMsg } = props;

  const listCheck = (id) => {
    const newMsg = msg.map((it) => {
      const flag = it.done;
      if (it.id === id) {
        it.done = !flag;
      }
      return it;
    });
    setMsg(newMsg);
  };

  const listDel = (id) => {
    const newMsg = msg.filter((it) => {
      return it.id !== id;
    });
    setMsg(newMsg);
  };

  return (
    <ul className="todo-main">
      {msg.map((it) => {
        return (
          <Item msg={it} key={it.id} listCheck={listCheck} listDel={listDel} />
        );
      })}
    </ul>
  );
}
