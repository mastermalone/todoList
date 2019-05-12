import React, { Component, Fragment } from "react";
import TodoItem from "./todoItem/TodoItem";
import TodoHeader from "./header/Header";

class TodoList extends Component {
  addTodo = (e, title) => {
    const { newTodo } = this.props;

    e.preventDefault();
    e.persist();
    if (newTodo) {
      const { updateTodos } = this.props;
      updateTodos(newTodo);
    }
    return false;
  };
  componentDidMount() {
    const { getTodos } = this.props;
    getTodos();
    console.log("THE PROPS", this.props);
  }
  render() {
    const { todoListItems } = this.props;
    const { addTodo } = this;
    return (
      <Fragment>
        <form onSubmit={values => addTodo(values)} name="todo-form">
          <TodoHeader handleSubmit={addTodo} />
          <TodoItem items={todoListItems} />
        </form>
      </Fragment>
    );
  }
}

export default TodoList;
