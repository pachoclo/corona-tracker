import { Header } from './Header'
import Head from 'next/head'

const mainStyle = {
  backgroundColor: '#fafafa',
  color: '#444444',
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  fontFamily: 'Open Sans',
  fontSize: 16,
  padding: 10
}

export const Layout = ({
  children,
  title = 'Coronito :: covid-19 virus tracker'
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='theme-color' content='#000' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='apple-touch-icon' href='/icon-192.png'></link>
      <link
        href='https://fonts.googleapis.com/css?family=Raleway:400|Open+Sans&display=swap'
        rel='stylesheet'
      />
    </Head>

    <main style={mainStyle}>
      <Header />
      {children}
    </main>
  </>
)
