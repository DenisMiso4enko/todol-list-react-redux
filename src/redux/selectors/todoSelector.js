export const allTodos = (state) => state.todos;

export const selectActiveTodos = (state) =>
  state.todos.filter((todo) => todo.done === false);

export const completedTodos = (state) =>
  state.todos.filter((todo) => todo.done === true);

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all": {
      return state.todos;
    }
    case "active": {
      return state.todos.filter((todo) => !todo.done);
    }
    case "completed": {
      return state.todos.filter((todo) => todo.done);
    }
    default:
      return state.todos;
  }
};
