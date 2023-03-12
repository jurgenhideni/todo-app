import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from 'components/Layout'
import Home from 'pages/Home'
import Tasks from 'pages/Tasks'
import EditPost from 'pages/EditTodo'
import Important from 'pages/Important'
import Completed from 'pages/Completed'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=':id' element={<EditPost />} />

          <Route path='/tasks' element={<Tasks />} />
          <Route path='/important' element={<Important />} />
          <Route path='/completed' element={<Completed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
