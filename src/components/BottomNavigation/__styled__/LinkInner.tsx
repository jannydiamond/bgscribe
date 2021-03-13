import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const LinkInner = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text.main};
  height: calc(100% + 1px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid transparent;
  transition: all 0.2 ease-in-out;
  margin-top: -1px;
  padding: 0 16px;
  transition: background-color 0.2s ease-in-out;

  span:not(.material-icons) {
    display: none;
  }

  &.active {
    color: ${(props) => props.theme.colors.primary.main};
    border-color: ${(props) => props.theme.colors.primary.main};
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.gray.light};
  }

  i {
    font-size: 1.5rem;
  }

  @media all and (min-width: 480px) {
    i {
      margin-right: 8px;
    }

    span:not(.material-icons) {
      display: inline-block;
      font-size: 0.875rem;
    }

    .material-icons,
    .material-icons-outlined {
      margin-right: 8px;
    }
  }
`

export default LinkInner
