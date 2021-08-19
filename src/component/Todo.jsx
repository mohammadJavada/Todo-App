import React from "react";

const Todo = () => {
  return (
    <div>
      <li>
        <div className="form-check">
          <label className="form-check-label">
            <input className="checkbox" type="checkbox" />
            Buy Milk.
            <i className="input-helper"> </i>
          </label>
        </div>
        <i className="remove mdi mdi-close-circle-outline"></i>
      </li>
    </div>
  );
};

export default Todo;
