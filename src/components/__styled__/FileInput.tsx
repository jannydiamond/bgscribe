import styled from 'styled-components/macro'

const FileInput = styled('input')`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.gray.main};
  transition: border-color 0.2s ease-in-out;
  outline: 0;
  padding: 9px 8px;
  color: ${(props) => props.theme.colors.text.main};
`

export default FileInput
