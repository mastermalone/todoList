import React from "react";
import { Field } from "redux-form";

const TodoItem = props => (
  <div>
    {props.items &&
      props.items.map(todo => (
        <div key={todo.id}>
          <Field component="input" type="checkbox" name={`check_${todo.id}`} />
          <span>{todo.title}</span>
        </div>
      ))}
  </div>
);

export default TodoItem;
