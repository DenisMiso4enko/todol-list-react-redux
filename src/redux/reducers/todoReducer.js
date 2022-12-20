import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  DELETE_COMPLETED_TODO,
} from "../actionTypes/todoTypes";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { title } = action;
      const newTodo = {
        id: Date.now(),
        title,
        done: false,
      };

      return [...state, newTodo];
    }
    case DELETE_TODO: {
      const { id } = action;
      return state.filter((todo) => todo.id !== id);
    }
    case TOGGLE_TODO: {
      const { id } = action;
      return state.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    }
    case DELETE_COMPLETED_TODO: {
      return state.filter((todo) => todo.done === false);
    }

    default:
      return state;
  }
};
