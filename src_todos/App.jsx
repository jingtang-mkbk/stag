import React, { Component } from 'react'
import Header from './component/Header'
import Footer from'./component/Footer'
import List from'./component/List'

import './App.css'

export default class App extends Component {

  // init state.todos
  state = {todos: [
    {id: '001', name: 'eat', done: true},
    {id: '002', name: 'sleep', done: true},
    {id: '003', name: 'code', done: false},
    {id: '004', name: 'run', done: true},
  ]}

  // add a todo,receive a obj
  addTodo = (todoObj) => {
    const {todos} = this.state

    const newTodos = [todoObj, ...todos]

    this.setState({todos: newTodos})
  }

  // 更新
  updateTodo = (id, done) => {
    const {todos} = this.state

    const newTodos = todos.map(todoObj => {
      if (todoObj.id === id) return {...todoObj, done}
      else return todoObj
    })

    this.setState({todos: newTodos})
  }

  // 删除
  deleteTodo = (id) => {
    const {todos} = this.state

    const newTodos = todos.filter(todoObj => {
      return todoObj.id !== id
    })

    this.setState({todos: newTodos})
  }

  checkAllTodo = done =>{
    const {todos} = this.state

    const newTodos = todos.map(todoObj => {
      return {...todoObj, done}
    })

    this.setState({todos: newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state

    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({todos: newTodos})
  }

  render() {

    const {todos} = this.state

    return (
        <div>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        </div>
    )
  }
}
