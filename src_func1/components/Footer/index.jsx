import React from "react";
import "./index.css";

export default function Footer(props) {
  const { msg, setMsg } = props;

  const total = props.msg.length;
  const count = props.msg.filter((it) => {
    return it.done === true;
  }).length;

  // 删除勾选
  const delMsg = () => {
    const newMsg = msg.filter((it) => {
      return it.done === false;
    });
    setMsg(newMsg);
  };

  // 全选-------------------------------未完成
  const handleCheck = (id) => {
    // const newMsg = msg;
    // newMsg.map((it) => {
    //   it.done = true;
    //   return it;
    // });
    // setMsg(newMsg);
    return (e) => {
      console.log(e.target.checked);
    };
  };

  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={count === total && total !== 0 ? true : false}
          onChange={handleCheck(msg.id)}
        />
      </label>
      <span>
        <span>已完成{count}</span> / 全部{total}
      </span>
      <button onClick={delMsg} className="btn btn-danger">
        清除已完成任务
      </button>
    </div>
  );
}
