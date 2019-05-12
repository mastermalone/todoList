import Duck from "extensible-duck";
import get from "lodash/get";
import axios from "axios";

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
          todos: action.payload
        };
      default:
        return state;
    }
  },

  selectors: {
    root: state => get(state),
    todos: state => get(state, "homeStore.todos")
  },
  creators: duck => ({
    getTodos: payload => ({
      type: duck.types.FETCH_TODO_LIST,
      payload
    }),
    updateTodoList: payload => ({
      type: duck.types.FETCH_TODO_LIST,
      payload
    })
  })
});

export const fetchTodoList = dispatch => {
  console.log("DISPATCH", dispatch);
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";
  axios({
    url: url,
    method: "get"
  })
    .then(resp => {
      console.log("This is being called", resp.data);
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
