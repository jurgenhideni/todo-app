import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(37, 100, 207, 0.5);
  display: grid;
  place-items: center;
  backdrop-filter: blur(5px);
  z-index: 5;
`

export const Modal = styled.div`
  position: relative;
  background-color: #fff;
  padding: 2rem;
  width: 100%;
  max-width: 500px;

  h2 {
    margin-bottom: 1rem;
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: rgb(37, 100, 207);

    svg {
      width: 24px;
      height: auto;
    }
  }
`
