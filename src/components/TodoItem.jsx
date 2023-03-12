import { useNavigate } from 'react-router-dom'
import { StarOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'

import { useDeleteTodo } from 'hooks/useDeleteTodo'
import { useUpdateTodo } from 'hooks/useUpdateTodo'

import formatDate from 'utils/formatDate'

import { Item } from './styled/TodoList.styled'
import { Checkbox } from './styled/Checkbox.styled'
import { ActionBtn } from './styled/ActionButtons.styled'

const TodoItem = ({
  title,
  important,
  id,
  completed,
  dueDate,
  createdAt,
  updatedAt
}) => {
  const navigate = useNavigate()

  const { mutate: deleteTodo } = useDeleteTodo()
  const { mutate: updateTodo } = useUpdateTodo()

  const handleDelete = () => {
    deleteTodo(id)
  }

  const handleUpdate = () => {
    updateTodo({ id, data: { important: true } })
  }

  const handleChange = (e) => {
    if (e.target.value === 'false') {
      updateTodo({ id, data: { completed: true } })
    } else {
      updateTodo({ id, data: { completed: false } })
    }
  }

  return (
    <Item>
      <Checkbox
        type='checkbox'
        value={completed}
        defaultChecked={completed}
        onChange={handleChange}
      />
      <p>
        <span>{title}</span> &nbsp; | &nbsp; Due Date:{' '}
        <span>{formatDate(dueDate)}</span> &nbsp; | &nbsp; Created:{' '}
        <span>{formatDate(createdAt)}</span> &nbsp; | &nbsp;{' '}
        {updatedAt && <UpdateAt date={updatedAt} />}
      </p>

      <ActionBtn important={important} onClick={handleUpdate}>
        <StarOutlined />
      </ActionBtn>
      <ActionBtn onClick={() => navigate(`/${id}`)}>
        <EditOutlined />
      </ActionBtn>
      <ActionBtn onClick={handleDelete}>
        <DeleteOutlined />
      </ActionBtn>
    </Item>
  )
}

const UpdateAt = ({ date }) => (
  <>
    Updated: <span>{formatDate(date)}</span>
  </>
)

export default TodoItem
