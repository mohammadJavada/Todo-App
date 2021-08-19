import React, { useState } from "react";
import "./App.css";
import Todo from "./component/Todo";
const initialTodos = [
  {
    id: uuid(),
    title: "Clean The House",
    isCompleted: false,
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
const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Awesome Todo list</h4>
              <div className="add-items d-flex">
                <input
                  type="text"
                  className="form-control todo-list-input"
                  placeholder="What do you need to do today?"
                />
                <button className="add btn btn-primary font-weight-bold todo-list-add-btn">
                  Add
                </button>
              </div>
              <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list">
                  {todos.map((todo) => (
                    <Todo todo={todo} />
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
