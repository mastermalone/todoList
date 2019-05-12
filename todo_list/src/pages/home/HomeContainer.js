import { connect } from "react-redux";
import { compose } from "redux";
import Home from "./Home";
import { fetchTodoList } from "./HomeStore";

const mapStateToProps = state => ({
  homeState: "Home state"
});

const mapDispatchToProps = dispatch => ({
  getTodos: () => fetchTodoList()
});
const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(Home);
