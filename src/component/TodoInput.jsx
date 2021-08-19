import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const TodoInput = ({ setTodos }) => {
  const [inputData, setInputData] = useState("");
  const handleAddTodo = () => {
    setTodos((todos) => {
      return [{ title: inputData, isCompleted: false, id: uuid() }, ...todos];
    });
    setInputData("");
  };
  return (
    <div>
      <div className="add-items d-flex">
        <input
          type="text"
          className="form-control todo-list-input"
          placeholder="What do you need to do today?"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          className="add btn btn-primary font-weight-bold todo-list-add-btn"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
