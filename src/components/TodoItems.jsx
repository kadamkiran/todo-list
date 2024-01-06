import React, { useCallback, useContext, useState } from 'react'
import './TodoItem.css'
import { MyContext } from '../MyContext'

const TodoItems = (props) => {

  const [todoStatus, setTodoStatus] = useState(props.todo.todo.status)

  const{todoArr, setTodoArr} = useContext(MyContext);

  const toggleStatus = () => {
    if (todoStatus == true) {
      if (window.confirm("Do you want to mark as incomplete ?")) {
        setTodoStatus(!todoStatus);
      }

    }else {
      setTodoStatus(!todoStatus);
    }
  }

  const deleteTodo =(todoId) => {
    let updatedTodoArr = todoArr.filter((item) => (item.todo.id !=todoId))
    setTodoArr([...updatedTodoArr])
  }

  return (
    <div className={`todo-item ${todoStatus ? 'green' : 'red'}`}>
      <div className="item-des"> {props.todo.todo.id}.{props.todo.todo.todoDesc}</div>
      <div>
        <button className='item-btn ' onClick={toggleStatus}>{todoStatus ? "Incomplete" : "Complete"}</button>
        <button className='item-btn ' onClick={()=>deleteTodo(props.todo.todo.id)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItems