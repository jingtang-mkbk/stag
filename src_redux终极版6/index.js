import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from './App'
import store from './redux/store'

createRoot(document.getElementById('root')).render(
// 让App所有的后代容器组件都能接收到
<Provider store={store}>
  <App />
</Provider>
)
