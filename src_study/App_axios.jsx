import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState();
  const [change, setChange] = useState(0);

  // 获取接口数据,change更新获取数据
  useEffect(() => {
    (async function getData() {
      const { data: res } = await axios({
        url: "http://ajax-api.itheima.net/api/news",
        method: "get",
      });
      setData(res.data);
      console.log(res.data);
    })();
  }, [change]);

  // 点击事件
  const clickBtn = () => {
    setChange(change + 1);
  };

  return (
    <>
      <button onClick={clickBtn}>btn</button>
    </>
  );
}
