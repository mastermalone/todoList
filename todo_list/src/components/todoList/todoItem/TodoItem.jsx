import React from "react";

const TodoItem = props => (
  <div>
    {props.items &&
      props.items.map(todo => (
        <div key={todo.id}>
          <input type="checkbox" />
          <span>{todo.title}</span>
        </div>
      ))}
  </div>
);

export default TodoItem;
