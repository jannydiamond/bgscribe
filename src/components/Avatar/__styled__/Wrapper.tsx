import styled from 'styled-components/macro'

const Wrapper = styled('div')`
  height: 64px;
  width: 64px;
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: 4px;

  + * {
    padding-left: 16px;
  }
`

export default Wrapper
