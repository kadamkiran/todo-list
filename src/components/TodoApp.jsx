import React from 'react'
import AddTodo from './AddTodo'
import DisplayTodo from './DisplayTodo'
import './Todoapp.css'

function TodoApp() {
  return (
    <div className='todoapp-con'>

      <h1 className='heading'><b>Just do it...</b></h1>
        <AddTodo/>
        <DisplayTodo/>

    </div>
  )
}

export default TodoApp