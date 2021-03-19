import styled from 'styled-components/macro'

type Props = {
  variant: 'default' | 'primary'
}

const Tag = styled('span')<Props>`
  height: 24px;
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.variant === 'primary' ? props.theme.colors.primary.main : '#fff'};
  color: ${(props) =>
    props.variant === 'primary' ? '#fff' : props.theme.colors.primary.main};
  padding: 0 16px;
  border-radius: 12px;
  font-weight: 600;
  line-height: 1;
`

export default Tag
