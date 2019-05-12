import React, { Component, Fragment } from "react";
import TodoItem from "./todoItem/TodoItem";
import TodoHeader from "./header/Header";

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
    return (
      <Fragment>
        <form name="todo-form">
          <TodoHeader />
          <TodoItem items={todoListItems} />
        </form>
      </Fragment>
    );
  }
}

export default TodoList;
