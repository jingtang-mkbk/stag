import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default function App(props) {
  const [msg, setMsg] = useState([
    { name: "Tom", age: 18, id: 1, done: true },
    { name: "Ken", age: 15, id: 2, done: true },
    { name: "Peter", age: 19, id: 3, done: true },
    { name: "Nico", age: 13, id: 4, done: false },
  ]);

  // 增加一条信息
  const addMsg = (obj) => {
    setMsg([obj, ...msg]);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addMsg={addMsg} />
          <List msg={msg} setMsg={setMsg} />
          <Footer msg={msg} setMsg={setMsg} />
        </div>
      </div>
    </>
  );
}
