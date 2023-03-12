import { useRef } from 'react'

import Modal from './Modal'
import * as S from 'components/styled/Navbar.styled'
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons'

const Navbar = () => {
  const modalRef = useRef()

  return (
    <>
      <S.Navbar>
        <h1>ToDo App</h1>
        <S.Search>
          <SearchOutlined />
          <S.Input />
        </S.Search>
        <button onClick={() => modalRef.current.open()}>
          <PlusCircleOutlined />
        </button>
      </S.Navbar>
      <Modal ref={modalRef} />
    </>
  )
}

export default Navbar
