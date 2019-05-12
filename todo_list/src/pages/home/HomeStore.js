import Duck from "extensible-duck";
import get from "lodash/get";
import axios from "axios";

const updateTodos = (state, action) => {
  const temp = state.todos.map(todo => todo);
  temp.push(action.payload);
  return temp;
};

export const HomeDuck = new Duck({
  namespace: "home-page",
  store: "homeStore",
  initialState: {},
  types: ["UPDATE_HOME_PAGE", "FETCH_TODO_LIST", "UPDATE_TODO_LIST"],
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.FETCH_TODO_LIST:
        return {
          ...state,
          todos: action.payload
        };
      case types.UPDATE_TODO_LIST:
        return {
          ...state,
          todos: updateTodos(state, action)
        };
      default:
        return state;
    }
  },

  selectors: {
    root: state => get(state),
    todos: state => get(state, "homeStore.todos"),
    newTodo: state => get(state, "form.todo-form.values.enterTodo")
  },
  creators: duck => ({
    getTodos: payload => ({
      type: duck.types.FETCH_TODO_LIST,
      payload
    }),
    updateTodoList: payload => ({
      type: duck.types.UPDATE_TODO_LIST,
      payload
    })
  })
});

export const fetchTodoList = dispatch => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";
  axios({
    url: url,
    method: "get"
  })
    .then(resp => {
      console.log("API Response", resp.data);
      dispatch(HomeDuck.creators.getTodos(resp.data));
    })
    .catch(err => {
      console.log("There was an error getting the data", err);
    });
};

export const updateTodoList = (dispatch, title) => {
  console.log("Updating todos");
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";
  axios({
    url: url,
    method: "post",
    data: {
      title,
      id: Math.floor(Math.random() * 1000),
      completed: false
    }
  })
    .then(resp => {
      console.log("Updating list", resp);
      dispatch(HomeDuck.creators.updateTodoList(resp.data));
    })
    .catch(err => {
      console.log("There was an error posting the data", err);
    });
};
