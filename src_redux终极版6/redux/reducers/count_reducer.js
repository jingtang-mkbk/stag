import {INCREMENT, DECREMENT} from '../constant'

const ininState = 0
export default function countReducer(preState=ininState, action){
  const {type, data} = action 

  switch(type){
    case INCREMENT: return preState + data 
    case DECREMENT: return preState - data
    default: return preState
  }
}