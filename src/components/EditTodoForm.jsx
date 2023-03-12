import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useTodos } from 'hooks/useTodos'
import { useUpdateTodo } from 'hooks/useUpdateTodo'
import { EditSidebar } from 'components/styled/EditSidebar.styled'
import { Form } from 'components/styled/Form.styled'
import { Field, Error, Textarea, Input, Label } from './styled/Field.styled'
import { useEffect } from 'react'

const schema = yup.object({
  title: yup.string().required('Title is required!'),
  description: yup.string().required('Description is required!'),
  dueDate: yup.string().required('Due date is required!')
})

const EditTodoForm = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { data } = useTodos()
  const { mutate: updateTodo } = useUpdateTodo()

  const post = data?.find((post) => post.id === pathname.slice(1))

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    await updateTodo({ id: post.id, data })
    navigate('/')
  }

  useEffect(() => {
    if (post) {
      reset({
        title: post.title,
        description: post.description,
        dueDate: post.dueDate
      })
    }
  }, [post])

  return (
    <EditSidebar>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label htmlFor='title'>
            Title {errors.title && <Error>{errors.title.message}</Error>}
          </Label>
          <Input id='title' type='text' {...register('title')} />
        </Field>

        <Field>
          <Label htmlFor='description'>
            Description
            {errors.description && <Error>{errors.description.message}</Error>}
          </Label>
          <Textarea id='description' rows='10' {...register('description')} />
        </Field>

        <Field>
          <Label htmlFor='dueDate'>
            Due date {errors.dueDate && <Error>{errors.dueDate.message}</Error>}
          </Label>
          <Input type='date' id='dueDate' {...register('dueDate')} />
        </Field>

        <Input type='submit' value='Update' />
      </Form>
    </EditSidebar>
  )
}

export default EditTodoForm
