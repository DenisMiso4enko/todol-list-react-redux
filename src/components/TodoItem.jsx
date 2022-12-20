import { deleteTodo, toggleTodo } from "../redux/actionCreators/todoActions";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";

const TodoItem = ({ id, title, done }) => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <li className={`todo-list__item todo-list__item--${theme}`}>
      <label className="check-label">
        <input
          className="check"
          type="checkbox"
          checked={done}
          onChange={() => handleToggleTodo(id)}
        />
        <span className="fake"></span>
      </label>
      <p className={`todo-title ${done ? "decore" : ""}`}>{title}</p>
      <button className="btn btn-delete" onClick={() => handleDeleteTodo(id)}>
        <IoCloseSharp />
      </button>
    </li>
  );
};

export default TodoItem;
