import { NavLink } from 'react-router-dom'

import {
  StarOutlined,
  HomeOutlined,
  CalendarOutlined,
  CheckOutlined
} from '@ant-design/icons'

import * as S from 'components/styled/Sidebar.styled'

const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.Nav>
        <S.Link>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <CalendarOutlined /> My Day
          </NavLink>
        </S.Link>
        <S.Link>
          <NavLink
            to='/tasks'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <HomeOutlined />
            All Tasks
          </NavLink>
        </S.Link>
        <S.Link>
          <NavLink
            to='/important'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <StarOutlined />
            Important
          </NavLink>
        </S.Link>
        <S.Link>
          <NavLink
            to='/completed'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <CheckOutlined />
            Completed
          </NavLink>
        </S.Link>
      </S.Nav>
    </S.Sidebar>
  )
}

export default Sidebar
