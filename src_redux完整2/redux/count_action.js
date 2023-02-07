import {INCREMENT, DECREMENT} from './constant'

export const createIncreamentAction = data=>({type:INCREMENT, data})
  
export const createDecreamentAction = data=>({type:DECREMENT, data})
