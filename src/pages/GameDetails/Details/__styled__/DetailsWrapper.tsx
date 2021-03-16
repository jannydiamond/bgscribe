import styled from 'styled-components/macro'

type Props = {
  noImage: boolean
}

const DetailsWrapper = styled('div')<Props>`
  padding: 24px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.text.light};
  font-size: 0.875rem;
  ${(props) => (props.noImage ? null : 'transform: translateY(-50%);')}
`

export default DetailsWrapper
