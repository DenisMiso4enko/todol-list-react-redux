import React from 'react'
import Filter from './Filter'
import ItemsLeft from './ItemsLeft'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCompletedTodo } from '../redux/actionCreators/todoActions'

const Footer = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const handleDeleteCompletedTodos = () => {
    dispatch(deleteCompletedTodo())
  }
  return (
    <footer className={`footer footer--${theme}`}>
      <ItemsLeft />
      <Filter />
      <button className="btn btn-clear" onClick={handleDeleteCompletedTodos}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
