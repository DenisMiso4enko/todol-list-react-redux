import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  DELETE_COMPLETED_TODO,
  SET_TODOS
} from "../actionTypes/todoTypes.js";

export const addTodo = (title) => ({
  type: ADD_TODO,
  title,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const setTodos = (newTodos) => ({
  type: SET_TODOS,
  newTodos

})

export const deleteCompletedTodo = () => ({
  type: DELETE_COMPLETED_TODO,
});
