import { combineReducers } from "redux";
import todoReducer from "./todos/reducer";
import filtersReducer from "./filters/reducer";

export const rootreducer = combineReducers({
  todos: todoReducer,
  filters: filtersReducer,
});
