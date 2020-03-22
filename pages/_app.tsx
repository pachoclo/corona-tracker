import '../global-styles.css'

interface AppProps {
  Component: any
  pageProps: any
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
