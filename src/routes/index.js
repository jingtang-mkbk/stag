import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Message"
import News from "../pages/News"
import Detail from "../pages/Detail"
import { Navigate } from "react-router-dom"

// 路由表

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/',
    element: <Navigate to='/home' />,
    children:[
      {
        path: 'message',
        element: <Message/>
      },
      {
        path: '/',
        element: <Navigate to='/home/message' />,
        children:[
          {
            path: '/',
            element: <Detail/>
          }
        ]
      },
      {
        path: 'news',
        element: <News/>
      },
      
    ]
  }
]
