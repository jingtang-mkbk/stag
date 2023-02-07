import React, { useRef } from 'react'

// 引入connect连接UI组件和redux
import {connect} from 'react-redux'

import {createIncreamentAction,
        createDecreamentAction,
        createIncreamentAsyncAction
} 
from '../../redux/actions/count_action'


// 定义UI组件
function Count(props) {

  const refValue = useRef()

  const {count, personCount} = props

  // 加
  const increment = () =>{
    const data = +refValue.current.value 
    props.jia(data)
  }
  // 减
  const decrement = () => {
    const data = +refValue.current.value 
    props.jian(data)
  }
  // 奇数加
  const incrementIfOdd = () =>{
    if(count % 2 !== 0){
      const data = +refValue.current.value 
      props.jia(data)
    }
  }
  // 异步加
  const incrementAsync = () =>{
      const data = +refValue.current.value 
      props.jiaAsync(data, 500)
  }
  

  return (
    <div>
      <h1>我是count组件,下方组件总人数为{props.renshu}</h1>
      <h2>当前求和为：{count}</h2>
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
// 创建并暴露一个Count的容器组件
export default connect(
  state => ({count: state.he, 
    renshu: state.rens.length}),
  {
    // 简写方式，只传一个对象，react-redux自动dispatch
    jia: createIncreamentAction,
    jian: createDecreamentAction,
    jiaAsync: createIncreamentAsyncAction
  }
)(Count)