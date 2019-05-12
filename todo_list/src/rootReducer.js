import { combineReducers } from "redux";
import { HomeDuck } from "./pages/home/HomeStore";
console.log("HomeDuck", HomeDuck);
const RootReducer = combineReducers({
  [HomeDuck.store]: HomeDuck.reducer
});

export default RootReducer;
