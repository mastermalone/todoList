import { combineReducers } from "redux";
import { HomeDuck } from "./pages/home/HomeStore";
import { reducer as formReducer } from "redux-form";

const RootReducer = combineReducers({
  [HomeDuck.store]: HomeDuck.reducer,
  form: formReducer
});

export default RootReducer;
