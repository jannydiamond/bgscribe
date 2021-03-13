import styled from 'styled-components/macro'

type Props = {
  delete?: true
}

const MenuListButton = styled('button')<Props>`
  background: transparent;
  border: none;
  padding: 16px;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: left;
  transition: background-color 0.2s ease-in-out;
  outline: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray.light};
  }

  .material-icons,
  .material-icons-outlined {
    font-size: 20px;
    vertical-align: sub;
    padding-right: 8px;
    color: ${(props) =>
      props.delete
        ? props.theme.colors.danger.main
        : props.theme.colors.primary.main};
  }
`

export default MenuListButton
