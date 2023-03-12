import styled from 'styled-components'

export const Field = styled.div`
  display: grid;
`

export const Label = styled.label`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
`

export const Error = styled.span`
  color: red;
`

export const Input = styled.input`
  border: 1px solid #f1f1f1;
  padding-block: 0.5rem;
  padding-inline: 0.5rem;

  &[type='submit'] {
    background-color: #2564cf;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
`

export const Textarea = styled.textarea`
  border: 1px solid #f1f1f1;
  padding-block: 0.5rem;
  padding-inline: 0.5rem;
  resize: none;
`
