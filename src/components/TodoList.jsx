import { selectVisibleTodos } from "../redux/selectors/todoSelector";

import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";
import { selectActiveFilter } from "../redux/selectors/filterSelector.js";

const TodoList = () => {
  const theme = useSelector((state) => state.theme);
  const filter = useSelector(selectActiveFilter);

  const todos = useSelector((state) => selectVisibleTodos(state, filter));

  if (todos.length === 0) {
    return (
      <ul className={`todo-list todo-list--${theme}`}>
        <li className="todo-list__item">
          <p style={{ margin: "0 auto" }}>Todos is empty</p>
        </li>
      </ul>
    );
  }
  return (
    <ul className={`todo-list todo-list--${theme}`}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
