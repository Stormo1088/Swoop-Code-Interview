import { createGlobalStyle, ThemeProvider } from 'styled-components'
import "../styles/fonts.css"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin: auto;
    max-width: 1400px;
    background: #111823;
  }
  * {
    font-family: "Pixelar";
  }
`

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

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
