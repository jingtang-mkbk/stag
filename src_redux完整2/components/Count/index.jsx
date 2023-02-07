import React, { useState, useRef } from 'react'
import store from '../../redux/store'
import {createIncreamentAction, createDecreamentAction} from '../../redux/count_action.js'

export default function Count() {

  const refValue = useRef()

  const [count,setCount] = useState(0) 

  // 加
  const increment = () =>{
    const data = +refValue.current.value 
    store.dispatch(createIncreamentAction(+data))
    setCount(store.getState())
  }
  // 减
  const decrement = () => {
    const data = +refValue.current.value 
    store.dispatch(createDecreamentAction(+data))
    setCount(store.getState())
  }
  // 奇数加
  const incrementIfOdd = () =>{
    if(count % 2 !== 0){
      const data = +refValue.current.value 
      store.dispatch(createIncreamentAction(+data))
      setCount(store.getState())
    }
  }
  // 异步加
  const incrementAsync = () =>{
    setTimeout(()=>{
      const data = +refValue.current.value 
      store.dispatch(createIncreamentAction(+data))
      setCount(store.getState())
    }, 500)
  }


  return (
    <div>
      <h1>当前求和为：{count}</h1>
      <select ref={refValue}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select> &nbsp;
      <button onClick={increment}>+</button>&nbsp;
      <button onClick={decrement}>-</button>&nbsp;
      <button onClick={incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
      <button onClick={incrementAsync}>异步加</button>&nbsp;
    </div>
  )
}
