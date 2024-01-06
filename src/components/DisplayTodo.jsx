import React, { useContext } from 'react'
import TodoItems from './TodoItems'
import './DisplayTodo.css'
import { MyContext } from '../MyContext';

function DisplayTodo() {

  // let todoarr = ["Go to class","Study React","Watch Match","Go to class","Study React","Watch Match"];

  const { todoArr, setTodoArr } = useContext(MyContext);




  return (

    <div className='distodo-con'>
      <h1><b>My ToDos..</b> </h1>
      <div className='todo-items'>

        {
          (todoArr.length == 0)?"No todos to Display":""
        }

        {todoArr.map((item) => (

          <TodoItems todo={item} />
        ))}

      </div>
    </div>
  )
}

export default DisplayTodo