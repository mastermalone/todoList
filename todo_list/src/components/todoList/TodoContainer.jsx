import { connect } from "react-redux";
import { compose } from "redux";
import TodoList from "./TodoList";
import { reduxForm, formValueSelector } from "redux-form";

import {
  HomeDuck,
  fetchTodoList,
  updateTodoList
} from "../../pages/home/HomeStore";
const { todos, newTodo } = HomeDuck.selectors;

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => {
      fetchTodoList(dispatch); //Saves the values in the state in HomeStore
    },
    updateTodos: title => {
      updateTodoList(dispatch, title);
    }
  };
};

const mapStateToProps = state => {
  return {
    todoListItems: todos(state), //Selector gets the values provided by fetchTodoList
    newTodo: newTodo(state)
  };
};

const selector = formValueSelector("todo-form");

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
    // state => selector(state, "addTodos")
  )
);

export default reduxForm({
  form: "todo-form"
})(enhance(TodoList));

// export default enhance(TodoList);
