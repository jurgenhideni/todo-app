import styled, { css } from 'styled-components'

export const ActionBtn = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #2564cf;
  display: grid;
  place-content: center;

  ${(props) =>
    props.important &&
    css`
      background-color: #2564cf;
      color: #fff;
    `}
`
