import type { AppProps } from 'next/app'

import 'styles/globals.css'

/* eslint-disable */
function MyApp({ Component, pageProps }: AppProps) {
  /* eslint-enable */
  return (
    // <ApolloProvider client={client}>
    <Component {...pageProps} />
    // </ApolloProvider>
  )
}

export default MyApp
