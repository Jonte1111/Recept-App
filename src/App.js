import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  //Binding
  const todoText = useRef();
  //Side effects/lifecycle
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);
  //Events
  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }
  return(
    <div>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>
      <form onSubmit={addTodo}>
        <input ref={todoText}/>
        <input type="submit" value="Add todo"></input>

      </form>
    </div>


  );
}

export default App;
