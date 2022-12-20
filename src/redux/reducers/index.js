import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { themeReducer } from "./themeReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  filters: filterReducer,
  todos: todoReducer,
  theme: themeReducer,
});
