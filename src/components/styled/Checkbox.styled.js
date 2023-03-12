import styled from 'styled-components'

export const Checkbox = styled.input`
  position: relative;
  width: 20px;
  height: 20px;
  appearance: none;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #2564cf;
  }

  :checked {
    ::after {
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='64 64 896 896' focusable='false' data-icon='check' width='1em' height='1em' fill='currentColor' aria-hidden='true'%3E%3Cpath d='M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'%3E%3C/path%3E%3C/svg%3E");
    }
  }
`
