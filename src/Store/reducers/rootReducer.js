import { combineReducers } from "redux";
import TableReducer from "./table";

const RootReducer = combineReducers({
  table: TableReducer,
});

export default RootReducer;
