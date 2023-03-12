import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useCreateTodo } from 'hooks/useCreateTodo'

import { Form } from 'components/styled/Form.styled'
import {
  Field,
  Input,
  Label,
  Textarea,
  Error
} from 'components/styled/Field.styled'

const schema = yup.object({
  title: yup.string().required('Title is required!'),
  description: yup.string().required('Description is required!'),
  dueDate: yup.string().required('Due date is required!')
})

const AddTodoForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const { mutate: createTodo, isLoading } = useCreateTodo()

  const onSubmit = async (data) => {
    await createTodo(data)
    closeModal()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Label htmlFor='title'>
          Title {errors.title && <Error>{errors.title.message}</Error>}
        </Label>
        <Input id='title' type='text' {...register('title')} />
      </Field>

      <Field>
        <Label htmlFor='description'>
          Description{' '}
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

      <Input
        disabled={isLoading}
        type='submit'
        value={isLoading ? 'Creating todo!' : 'Submit'}
      />
    </Form>
  )
}

export default AddTodoForm
