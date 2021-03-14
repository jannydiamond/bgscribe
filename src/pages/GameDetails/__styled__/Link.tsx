import styled from 'styled-components/macro'
import { Link as RouterLink } from 'react-router-dom'

import AvatarImage from 'components/Avatar/__styled__/Image'
import AvatarPlaceholder from 'components/Avatar/__styled__/Placeholder'

import IconWrapper from './IconWrapper'

const Link = styled(RouterLink)`
  display: flex;
  height: 64px;
  width: 100%;
  text-decoration: none;

  &:hover,
  &:focus {
    ${AvatarImage} {
      filter: grayscale(0);
    }

    ${AvatarPlaceholder} {
      background-color: ${(props) => props.theme.colors.primary.light};
    }

    ${IconWrapper} {
      color: ${(props) => props.theme.colors.primary.dark};
    }
  }
`

export default Link
