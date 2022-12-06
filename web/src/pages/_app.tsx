import type { AppProps } from 'next/app'
import "../styles/global.css";

function myApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default myApp;
