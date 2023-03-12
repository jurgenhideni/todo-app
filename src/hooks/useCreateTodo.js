import { useMutation, useQueryClient } from '@tanstack/react-query'

import client from 'libs/client'

export const useCreateTodo = () => {
  const queryClient = useQueryClient()

  const createTodo = async (data) => {
    await client.post('/todos', {
      completed: false,
      ...data
    })
  }

  const mutation = useMutation({
    mutationFn: (data) => createTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  return mutation
}
