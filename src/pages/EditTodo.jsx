import TodoList from 'components/TodoList'
import EditTodoForm from 'components/EditTodoForm'
import { Grid } from 'components/styled/Grid.styled'

const EditPost = () => {
  return (
    <Grid columns='1fr auto'>
      <TodoList />
      <EditTodoForm />
    </Grid>
  )
}

export default EditPost
