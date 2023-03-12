import styled from 'styled-components'

export const Sidebar = styled.div`
  width: 350px;
  background-color: #f7f7f7;
  height: calc(100vh - 50px);
`

export const Nav = styled.ul`
  padding-block: 2rem;
`

export const Link = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-inline: 2rem;
    padding-block: 1rem;
    cursor: pointer;
  }

  :hover {
    background-color: #2564cf;

    a {
      color: #fff;
    }
  }
`
