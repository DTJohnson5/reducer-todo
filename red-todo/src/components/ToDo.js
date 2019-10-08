import React from "react";

function ToDo({ todo, dispatch }) {
  const completed = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.id
    });
  };

  return (
    <>
      <div
        onClick={completed}
        className={`todo${todo.completed ? "completed" : ""}`}
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        <p>{todo.item}</p>
      </div>
    </>
  );
}

export default ToDo;