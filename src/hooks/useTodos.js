import { useQuery } from '@tanstack/react-query'

import client from 'libs/client'

export const useTodos = (filter) => {
  const getTodos = async () => {
    const res = await client.get('/todos', {
      params: {
        ...filter
      }
    })

    const data = res.data.map(({ _id, ...rest }) => ({
      id: _id,
      ...rest
    }))

    return data
  }

  const query = useQuery(['todos'], getTodos)

  return query
}
