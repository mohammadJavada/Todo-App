import React from "react";

const Todo = ({ todo, handleChangeStatus, handleDeleteTodos }) => {
  return (
    <div>
      <li className={todo.isCompleted ? "completed" : ""}>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleChangeStatus(todo.id)}
            />
            {todo.title}
            <i className="input-helper"> </i>
          </label>
        </div>
        <i
          onClick={() => handleDeleteTodos(todo.id)}
          className="remove mdi mdi-close-circle-outline"
        ></i>
      </li>
    </div>
  );
};

export default Todo;
