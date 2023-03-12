import { useTodos } from 'hooks/useTodos'

import TodoItem from 'components/TodoItem'
import { List } from 'components/styled/TodoList.styled'

const Home = () => {
  const { data, isLoading } = useTodos()

  const today = new Date().getDate()

  const todayTasks = data?.filter(
    (todo) => new Date(todo.dueDate).getDate() === today
  )

  return (
    <List>
      {isLoading
        ? 'Loading ...'
        : todayTasks.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </List>
  )
}

export default Home
