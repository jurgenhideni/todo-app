import { useTodos } from 'hooks/useTodos'

import TodoItem from './TodoItem'
import { List } from 'components/styled/TodoList.styled'

const TodoList = ({ filter }) => {
  const { data, isLoading } = useTodos(filter)

  return (
    <List>
      {isLoading
        ? 'Loading ...'
        : data.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </List>
  )
}

export default TodoList
