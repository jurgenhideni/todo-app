import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => props.rows};
`
