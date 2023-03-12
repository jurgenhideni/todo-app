import TodoList from 'components/TodoList'

const Completed = () => {
  return <TodoList filter={{ completed: true }} />
}

export default Completed
