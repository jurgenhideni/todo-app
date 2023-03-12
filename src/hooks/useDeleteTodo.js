import { useMutation, useQueryClient } from '@tanstack/react-query'
import client from 'libs/client'

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()
  const deleteTodo = async (id) => {
    await client.delete(`/todos/${id}`)
  }

  const mutation = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  return mutation
}
