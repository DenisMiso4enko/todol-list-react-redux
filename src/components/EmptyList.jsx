export const EmptyList = ({ theme }) => {
  return (
    <ul className={`todo-list todo-list--${theme}`}>
      <li className="todo-list__item">
        <p style={{ margin: '0 auto' }}>Todos is empty</p>
      </li>
    </ul>
  )
}
