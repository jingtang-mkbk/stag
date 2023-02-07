// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect连接UI组件和redux
import {connect} from 'react-redux'

import {createIncreamentAction,
        createDecreamentAction,
        createIncreamentAsyncAction
} 
from '../../redux/count_action'


// a函数返回的key给UI做props做key，value 作为props的value————状态
function mapStateToProps(state){
  return {count: state}
}
// b函数返回的key给UI做props做key，value 作为props的value————方法
function mapDispatchToProps(dispatch){
  return {
    jia: data=>dispatch(createIncreamentAction(data)),
    jian: data=>dispatch(createDecreamentAction(data)),
    jiaAsync: (data, time)=>dispatch(createIncreamentAsyncAction(data, time)),
  }
}

// 创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)