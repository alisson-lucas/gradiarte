// pages/_app.js
// import '../styles/globals.css'
import '@fontsource/lato/700.css'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../src/styles/theme'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;