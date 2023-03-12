import styled from 'styled-components'

export const List = styled.ul`
  padding-block: 2rem;
`

export const Item = styled.li`
  padding-block: 1rem;
  padding-inline: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  :not(:last-of-type) {
    border-bottom: 1px solid #f1f1f1;
  }

  :hover {
    background-color: #f7f7f7;
  }

  p {
    margin-right: auto;

    span:first-of-type {
      font-weight: 600;
    }

    span:not(:first-of-type) {
      font-style: italic;
    }
  }
`
