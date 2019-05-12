import React, { Component, Fragment } from "react";
import TodoContainer from "../../components/todoList/TodoContainer";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div>HOME PAGE</div>
          <form>
            <TodoContainer />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Home;
