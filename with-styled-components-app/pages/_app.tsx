import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #111823;
    @font-face {
    font-family: "Pixelar";
    src: url("/fonts/Pixelar-Regular-W01-Regular.ttf") format("truetype");
    }
  }
`

const theme = {
  colors: {
    white: '#fafafb',
    yellow: '#c2a223',
    lightyellow: '#ffff95',
    brown: '#854e19',
    darkblue: '#111823',
    gray: '#676b70',
    darkgray: '#4c4d52',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
