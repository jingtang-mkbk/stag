import {INCREMENT, DECREMENT} from '../constant'
// import store from './store' 

// 同步action，返回的值是对象
export const createIncreamentAction = data=>({type:INCREMENT, data})
  
export const createDecreamentAction = data=>({type:DECREMENT, data})

// 异步action,返回的值是函数,异步action中调用同步action
export const createIncreamentAsyncAction = (data, time)=>{
  return (dispatch)=> {
    setTimeout(()=>{
      dispatch(createIncreamentAction(data))
    }, time)
  }
}