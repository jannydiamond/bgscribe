import styled from 'styled-components/macro'

const Wrapper = styled('header')`
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background: #009432;
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  h1 {
    font-weight: 300;
  }
`

export default Wrapper
