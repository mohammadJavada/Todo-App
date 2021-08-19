import React, { useState } from "react";
import Todo from "./component/Todo";
import { v4 as uuid } from "uuid";
import "./App.css";
import TodoInput from "./component/TodoInput";
/**********************/
const initialTodos = [
  {
    id: uuid(),
    title: "Clean The House",
    isCompleted: true,
  },
  {
    id: uuid(),
    title: "Buy A New Car",
    isCompleted: false,
  },
  {
    id: uuid(),
    title: "Buy A New Laptop",
    isCompleted: false,
  },
];
/**********************/
const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  /*******************/
  const handleChangeStatus = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };
  /**************************/
  const handleDeleteTodos = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };
  /*****************************/
  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Awesome Todo list</h4>
              <TodoInput setTodos={setTodos} />
              <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list">
                  {todos.map((todo) => (
                    <Todo
                      todo={todo}
                      handleChangeStatus={handleChangeStatus}
                      handleDeleteTodos={handleDeleteTodos}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
