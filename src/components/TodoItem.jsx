import { deleteTodo, toggleTodo } from '../redux/actionCreators/todoActions'
import { useDispatch, useSelector } from 'react-redux'
import { IoCloseSharp } from 'react-icons/io5'

const TodoItem = (todo) => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  }
  return (
    <div className={`todo-list__item todo-list__item--${theme}`}>
      <label className="check-label">
        <input
          className="check"
          type="checkbox"
          checked={todo.done}
          onChange={() => handleToggleTodo(todo.id)}
        />
        <span className="fake"></span>
      </label>
      <p className={`todo-title ${todo.done ? 'decore' : ''}`}>{todo.title}</p>
      <button
        className="btn btn-delete"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <IoCloseSharp />
      </button>
    </div>
  )
}

export default TodoItem
