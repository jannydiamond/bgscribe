import styled from 'styled-components/macro'

import { default as ReactSelect } from 'react-select'

const Select = styled((props) => (
  <ReactSelect classNamePrefix="ReactSelect" {...props} />
))`
  .ReactSelect__control {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.gray.main};
    transition: border-color 0.2s ease-in-out;
    outline: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.text.dark};
    font-size: 0.875rem;
    box-shadow: none;
    text-transform: capitalize;

    &:hover,
    &:focus {
      border-color: ${(props) => props.theme.colors.primary.main};
      caret-color: ${(props) => props.theme.colors.primary.main};
    }

    &--menu-is-open {
      border-color: ${(props) => props.theme.colors.primary.main};

      .ReactSelect__indicator {
        color: ${(props) => props.theme.colors.primary.main};
      }
    }
  }

  .ReactSelect__menu {
    box-shadow: 0 0 10px rgb(0 0 0 / 14%);
  }

  .ReactSelect__menu-list {
    padding: 8px 0;
  }

  .ReactSelect__option {
    padding: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    outline: none;
    background: transparent;
    font-size: 0.875rem;
    text-transform: capitalize;

    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.colors.gray.light};
    }

    &--is-selected {
      background-color: ${(props) => props.theme.colors.primary.main};
      color: ${(props) => props.theme.colors.text.light};

      &:hover {
        background-color: ${(props) => props.theme.colors.primary.main};
      }
    }
  }
`

export default Select
