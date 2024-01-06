import React, { useContext, useState ,useRef} from 'react'
import './Addtodo.css'
import { MyContext } from '../MyContext';

const AddTodo = () => {

  const {todoArr, setTodoArr} = useContext(MyContext);

  const [todoInput, setTodoInput] = useState('');

  const inpbox = useRef('')

  const addTodoInArray = () => {
    const todo ={
      id:(todoArr.length+1),
      todoDesc:todoInput,
      status:false
    }

    setTodoArr([...todoArr,{todo}]);
    setTodoInput('')
    inpbox.current.focus();
  }

  return (
    <div className='addtodo-con'>

      <input type="text" name="todoinput" id="todo" className='todo-inp' placeholder='Enter Todo ' value={todoInput} onChange={(e) => setTodoInput(e.target.value)} ref={inpbox} />
      <button className='add-btn' onClick={() => addTodoInArray()}>ADD</button>
    </div>
  )
}

export default AddTodo