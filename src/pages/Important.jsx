import TodoList from 'components/TodoList'

const Important = () => {
  return <TodoList filter={{ important: true }} />
}

export default Important
