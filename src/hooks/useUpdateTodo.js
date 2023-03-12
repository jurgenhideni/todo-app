import { useMutation, useQueryClient } from '@tanstack/react-query'

import client from 'libs/client'

export const useUpdateTodo = () => {
  const queryClient = useQueryClient()

  const updateTodo = async ({ id, data }) => {
    await client.put(`/todos/${id}`, {
      ...data
    })
  }

  const mutation = useMutation({
    mutationFn: ({ id, data }) => updateTodo({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  return mutation
}
