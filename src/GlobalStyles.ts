import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  ::after, 
  ::before {
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    margin: 0;
    padding: 0;
  }
`
export default GlobalStyle
