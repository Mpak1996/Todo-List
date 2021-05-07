import React, { useState } from "react";
import './App.css';
import Form from'./components/Form';
import Todolist from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Todo List App </h1>
      </header>
      <Form inputText = {inputText} todos = {todos} setTodos = {setTodos} setInputText = {setInputText}/>
      <Todolist setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
