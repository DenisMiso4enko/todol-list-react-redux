import { useSelector } from 'react-redux'
import FormAddTodo from './components/FormAddTodo'
import TodoList from './components/TodoList'
import Back from './components/Back'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const theme = useSelector((state) => state.theme)
  return (
    <div className={`App App--${theme}`}>
      <Back />
      <div className="container">
        <Header />
        <FormAddTodo />
        <TodoList />
        <Footer />
      </div>
    </div>
  )
}

export default App
