import React from "react";
import { Field } from "redux-form";

const TodoItem = props => (
  <div>
    {props.items &&
      props.items.map(todo => (
        <div
          key={Math.floor(Math.random() * 10000)}
          className="form-control mb-2"
        >
          <Field component="input" type="checkbox" name={`check_${todo.id}`} />
          <span className="ml-2">{todo.title}</span>
        </div>
      ))}
  </div>
);

export default TodoItem;
