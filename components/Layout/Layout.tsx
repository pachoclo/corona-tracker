import Header from '../Header'
import Head from 'next/head'
import styles from './Layout.module.css'

const Layout = ({ children, title = 'Coronito: corona virus tracker' }) => (
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
      <script type='text/javascript' src='/heap.js' />
    </Head>

    <main className={styles.main}>
      <Header />
      {children}
    </main>
  </>
)

export default Layout
