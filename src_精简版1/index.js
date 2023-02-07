import React from "react";
import { createRoot } from "react-dom/client";
import App from './App'

createRoot(document.getElementById('root')).render(<App />)

//或者
// import store from "./redux/store";

// store.subscribe(()=>{
//   createRoot(document.getElementById('root')).render(<App />)
// })