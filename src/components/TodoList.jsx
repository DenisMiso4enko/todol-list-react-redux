import { selectVisibleTodos } from '../redux/selectors/todoSelector'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { selectActiveFilter } from '../redux/selectors/filterSelector.js'
import { EmptyList } from './EmptyList'

const TodoList = () => {
  const theme = useSelector((state) => state.theme)
  const filter = useSelector(selectActiveFilter)
  const todos = useSelector((state) => selectVisibleTodos(state, filter))

  if (todos.length === 0) return <EmptyList theme={theme} />
  return (
    <div className={`todo-list todo-list--${theme}`}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
