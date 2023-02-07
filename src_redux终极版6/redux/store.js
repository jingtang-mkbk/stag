// 引入createStore，专门用于redux中最为核心的store对象
import {legacy_createStore as createStore, 
  applyMiddleware,
  combineReducers
} from 'redux'
// 为Count组件服务的reducer
import countReducer from './reducers/count_reducer'
// 为Person组件服务的reducer
import personReducer from './reducers/person'
// 中间件，支持异步redux
import thunk from 'redux-thunk'

// 汇总所有reducer变为一个总的reducer
const allReducer = combineReducers({
  he: countReducer,
  rens: personReducer
})
// 暴露store
export default createStore(allReducer, applyMiddleware(thunk))