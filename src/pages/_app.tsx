import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ApolloProvider client={client}>
    <Component {...pageProps} />
    // </ApolloProvider>
  );
}

export default MyApp;
