import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actionCreators/todoActions'

const FormAddTodo = () => {
  const theme = useSelector((state) => state.theme)
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const handleAddTodo = (e) => {
    e.preventDefault()
    if (title.trim()) {
      dispatch(addTodo(title))
      setTitle('')
    }
  }

  return (
    <form className={`form-add form-add--${theme}`} onSubmit={handleAddTodo}>
      <input
        className="input-add"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
}

export default FormAddTodo
