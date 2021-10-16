import { useState, useEffect } from 'react';
import './App.css';
import Form from './componenets/Form';
import TodoList from './componenets/TodoList';

function App() {

  
  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run ONCE when the app starts
  useEffect(() => {
    const getLocalTodos = () => {
      if(localStorage.getItem("todos") === null)
        localStorage.setItem("todos", JSON.stringify([]));
      else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    }
    getLocalTodos();
  }, []);

  //Functions
  useEffect(() => {

    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    const filterHandler = () => {
      switch(status){
        case "completed": 
          setFilteredTodos(todos.filter(todo => todo.completed));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter(todo => !todo.completed));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  

  


  return (
    <div className="App">
      <header>
        <h1>To do list</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}></Form>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}></TodoList>
    </div>
  );
}

export default App;
