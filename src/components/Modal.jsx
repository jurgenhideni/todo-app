import { forwardRef, useImperativeHandle, useState } from 'react'

import { CloseCircleOutlined } from '@ant-design/icons'

import AddTodoForm from 'components/AddTodoForm'
import * as S from 'components/styled/Modal.styled'

const Modal = (_props, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true)
  }))

  const handleClose = () => setIsOpen(false)

  if (!isOpen) return null

  return (
    <S.Backdrop>
      <S.Modal>
        <button onClick={handleClose}>
          <CloseCircleOutlined />
        </button>
        <h2>Add new todo</h2>
        <AddTodoForm closeModal={handleClose} />
      </S.Modal>
    </S.Backdrop>
  )
}

export default forwardRef(Modal)
