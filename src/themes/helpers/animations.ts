import { keyframes } from 'styled-components/macro'

type FadeInOut = {
  topStart?: string
  topEnd?: string
  leftStart?: string
  leftEnd?: string
  bottomStart?: string
  bottomEnd?: string
}

export const fadeIn = (props: FadeInOut) => {
  return keyframes`
    0% {
      ${props.topStart && `top: ${props.topStart};`}
      ${props.leftStart && `left: ${props.leftStart};`}
      ${props.bottomStart && `bottom: ${props.bottomStart};`}
      opacity: 0;
    }

    100% {
      ${props.topEnd && `top: ${props.topEnd};`}
      ${props.leftEnd && `left: ${props.leftEnd};`}
      ${props.bottomEnd && `bottom: ${props.bottomEnd};`}
      opacity: 1;
    }
  `
}

export const fadeOut = (props: FadeInOut) => {
  return keyframes`
    100% {
      ${props.topStart && `top: ${props.topStart};`}
      ${props.leftStart && `left: ${props.leftStart};`}
      ${props.bottomStart && `bottom: ${props.bottomStart};`}
      opacity: 1;
    }

    0% {
      ${props.topEnd && `top: ${props.topEnd};`}
      ${props.leftEnd && `left: ${props.leftEnd};`}
      ${props.bottomEnd && `bottom: ${props.bottomEnd};`}
      opacity: 0;
    }
  `
}
