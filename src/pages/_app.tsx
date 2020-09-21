import { ChakraProvider } from '@chakra-ui/core'
import type { AppProps } from 'next/app'

import 'styles/globals.css'

/* eslint-disable */
function MyApp({ Component, pageProps }: AppProps) {
  /* eslint-enable */
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
