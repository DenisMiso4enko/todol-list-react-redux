import { selectVisibleTodos } from "../redux/selectors/todoSelector";
import { Reorder } from "framer-motion"

import {useDispatch, useSelector} from "react-redux";

import TodoItem from "./TodoItem";
import { selectActiveFilter } from "../redux/selectors/filterSelector.js";
import {setTodos} from "../redux/actionCreators/todoActions.js";

const TodoList = () => {
  const theme = useSelector((state) => state.theme);
  const filter = useSelector(selectActiveFilter);
  const dispatch = useDispatch()

  const todos = useSelector((state) => selectVisibleTodos(state, filter));

  const handleOnReorder = (newTodos) => {
    dispatch(setTodos(newTodos))
  }

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
    <Reorder.Group as="ul" values={todos} axis="y" onReorder={handleOnReorder} className={`todo-list todo-list--${theme}`}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Reorder.Group>
  );
};

export default TodoList;
