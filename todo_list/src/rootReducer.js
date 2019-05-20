import { combineReducers } from "redux";
import { HomeDuck } from "./pages/home/HomeStore";
import { FormExampleDuck } from "./pages/formEample/FormExampleStore";
import { reducer as formReducer } from "redux-form";

const RootReducer = combineReducers({
  [HomeDuck.store]: HomeDuck.reducer,
  [FormExampleDuck.store]: FormExampleDuck.reducer,
  form: formReducer
});

export default RootReducer;
