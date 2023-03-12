import { Outlet } from 'react-router-dom'

import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'

import { Grid } from 'components/styled/Grid.styled'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Grid columns='auto 1fr'>
        <Sidebar />
        <Outlet />
      </Grid>
    </>
  )
}

export default Layout
