import { connect } from "react-redux";
import { compose } from "redux";
import TodoList from "./TodoList";

import {
  HomeDuck,
  fetchTodoList,
  updateTodoList
} from "../../pages/home/HomeStore";
const { todos } = HomeDuck.selectors;
console.log("todos", todos);
// import axios from 'axios';

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
    todoListItems: todos(state) //Selector gets the values provided by fetchTodoList
  };
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(TodoList);
