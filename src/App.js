import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TodoApp from './components/TodoApp';
import { MyContext } from './MyContext';

function App() {

  const [todoArr, setTodoArr]= useState([]);


  return (
    <div className='app-con'>
      <MyContext.Provider value={{todoArr, setTodoArr}}>
      <NavBar />
      <TodoApp />
      
      </MyContext.Provider>

     </div >
      );
}

      export default App;
