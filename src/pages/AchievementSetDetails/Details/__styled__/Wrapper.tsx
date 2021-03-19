import styled from 'styled-components/macro'

import P from 'components/__styled__/P'
import TagList from 'components/Tags/__styled__/List'

const Wrapper = styled('div')`
  padding: 24px;
  margin-bottom: 32px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.text.light};
  font-size: 0.875rem;

  ${P} {
    &:first-of-type {
      margin-top: 0;
    }
  }

  ${TagList} {
    margin-top: 16px;
  }
`

export default Wrapper
