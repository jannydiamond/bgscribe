import styled from 'styled-components/macro'

import Link from 'components/__styled__/Link'

const Main = styled('main')`
  ${Link} {
    + * {
      margin-top: 16px;
    }
  }
`

export default Main
