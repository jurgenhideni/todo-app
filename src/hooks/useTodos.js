import { useQuery } from '@tanstack/react-query'

import client from 'libs/client'

export const useTodos = (filter) => {
  const getTodos = async () => {
    const res = await client.get('/todos', {
      params: {
        ...filter
      }
    })

    const data = res.data.map((item) => ({
      title: item.title,
      description: item.description,
      dueDate: item.dueDate,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt || '',
      completed: item.completed,
      id: item._id
    }))

    return data
  }

  const query = useQuery(['todos'], getTodos)

  return query
}
