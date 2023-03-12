import axios from 'axios'

const client = axios.create({
  baseURL: 'https://todo-api-9g6w.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default client
