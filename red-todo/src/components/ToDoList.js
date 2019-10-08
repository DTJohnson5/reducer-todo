import React, { useReducer } from "react";

import { reducer, todo } from "../reducers/reducers";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const ToDoList = props => {
  const [state, dispatch] = useReducer(reducer, todo);

  return (
    <div>
      <ToDoForm dispatch={dispatch} />
      {state.map(todo => {
        return <ToDo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default ToDoList;