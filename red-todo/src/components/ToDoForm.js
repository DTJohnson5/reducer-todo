import React, { useState } from "react";

const ToDoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChanges = e => {
    setItem(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
    setItem("");
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div>
      <h1>Things to Do!</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="todo" hidden>
          Todo
        </label>
        <input name="todo" onChange={handleChanges} value={item} />
        <button className='addTask'>Add Task</button>
        <button className='removeTask' onClick={clearCompleted}>Remove Task</button>
      </form>
    </div>
  );
};

export default ToDoForm;