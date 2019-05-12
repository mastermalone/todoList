import React, { Component } from "react";
import TodoItem from "./todoItem/TodoItem";

class TodoList extends Component {
  addTodo = title => {
    const { updateTodos } = this.props;
    updateTodos(title);
  };
  componentDidMount() {
    const { getTodos } = this.props;
    getTodos();
    console.log("THE PROPS", this);
  }
  render() {
    const { todoListItems } = this.props;
    console.log("todoListItems", todoListItems);
    return <TodoItem items={todoListItems} />;
  }
}

export default TodoList;
