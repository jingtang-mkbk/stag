import React,{useRef} from 'react'
import {nanoid} from "nanoid"
import { connect } from 'react-redux'
import {createddPersonAction} from '../../redux/actions/person'

function Person(props) {
  const nameNode = useRef()
  const ageNode = useRef()

  const addPerson = ()=>{
    const name = nameNode.current.value
    const age = ageNode.current.value
    const personObj = {id: nanoid(), name, age}
    
    props.jiaYiRen(personObj)
    nameNode.current.value = ''
    ageNode.current.value = ''
  }
  
  return (
    <div>
      <h2>我是Person组件,上方组件求和为{props.he} </h2>
      <input ref={nameNode} type="text" placeholder='输入名字' />
      <input ref={ageNode} type="text" placeholder='输入年龄' />
      <button onClick={addPerson}>新增</button>
      <ul>
        {
          props.yiduiren.map(p => <li>{p.name}--{p.age}</li>)
        }
      </ul>
    </div>
  )
}

export default connect(
  state => ({yiduiren: state.rens, he: state.he}),
  {
    jiaYiRen: createddPersonAction
  }
)(Person)