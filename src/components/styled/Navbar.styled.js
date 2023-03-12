import styled from 'styled-components'

export const Navbar = styled.div`
  background-color: #2564cf;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2rem;
  height: 50px;

  h1 {
    color: #fff;
    font-size: 1.5rem;
  }

  button {
    color: #fff;

    svg {
      width: 24px;
      height: auto;
    }
  }
`

export const Search = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding-inline: 5px;

  svg {
    transform: scaleX(-1);
    color: #2564cf;
    margin-right: 5px;
  }
`

export const Input = styled.input`
  height: 30px;
  width: 400px;
`
