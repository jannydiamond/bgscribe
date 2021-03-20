import styled from 'styled-components/macro'

const H2 = styled('h2')`
  margin: 0 0 16px;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text.main};

  @media all and (min-width: 480px) {
    font-size: 2rem;
  }
`

export default H2
