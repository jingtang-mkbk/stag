import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  // 修改自定义样式
  function myClass({ isActive }) {
    return isActive ? "list-group-item myactive" : "list-group-item"
  }
  console.log("app")

  const element = useRoutes(routes)

  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className={myClass} to="/home">Home</NavLink>
            <NavLink className={myClass} to="/about">About</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* <Routes>
                <Route path="/about" element={ <About/>}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" element={<Navigate to="/about" />}></Route>                
              </Routes> */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>)
}
