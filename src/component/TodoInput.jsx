import React from "react";

const TodoInput = () => {
  return (
    <div>
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
    </div>
  );
};

export default TodoInput;
