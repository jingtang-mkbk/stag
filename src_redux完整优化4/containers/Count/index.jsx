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
// 映射状态
// const mapStateToProps = state => ({count: state}) 

// b函数返回的key给UI做props做key，value 作为props的value————方法
// 映射操作状态的方法
// const mapDispatchToProps = dispatch =>({
//     jia: data=>dispatch(createIncreamentAction(data)),
//     jian: data=>dispatch(createDecreamentAction(data)),
//     jiaAsync: (data, time)=>dispatch(createIncreamentAsyncAction(data, time)),
//   })


// 创建并暴露一个Count的容器组件
export default connect(
  state => ({count: state}),
  {
    // 简写方式，只传一个对象，react-redux自动dispatch
    jia: createIncreamentAction,
    jian: createDecreamentAction,
    jiaAsync: createIncreamentAsyncAction
  }
)(CountUI)