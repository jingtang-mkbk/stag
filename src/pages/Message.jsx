import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {

  const navigate = useNavigate()

  const [msg] = useState([
    { id: '001', title: '消息1', content: '玛卡巴卡' },
    { id: '002', title: '消息2', content: '乌西迪西' },
    { id: '003', title: '消息3', content: '小点点' },
    { id: '004', title: '消息4', content: '依古比古' },
  ])

  function showDetail(m) {
    navigate('/home/detail', {
      replace: false,
      state: {
        id: m.id,
        title: m.title,
        content: m.content,
      }
    })
  }

  return (
    <div>
      <ul>
        {
          msg.map(it => {
            return (
              <li key={it.id}>
                <Link to="detail" state={{ id: it.id, title: it.title, content: it.content }}>{it.title}</Link>
                <button onClick={() => showDetail(it)}>查看详情</button>
              </li>)
          })
        }
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
