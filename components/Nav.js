import Link from 'next/link'
import getEmojiFlag from '../util/getEmojiFlag'
import styles from './Nav.module.css'

export const countryCodeList = ['CA', 'CO', 'CN', 'US', 'IT', 'IR']

const CountryLink = ({ countryCode }) => (
  <Link href='/country/[country]' as={`/country/${countryCode}`}>
    <a className={styles.linkStyle}>{getEmojiFlag(countryCode)}</a>
  </Link>
)

const WorldLink = () => (
  <Link href='/'>
    <a className={styles.linkStyle}>{'🌎'}</a>
  </Link>
)

export default () => (
  <div className={styles.navStyle}>
    <WorldLink />

    {countryCodeList.map(countryCode => (
      <CountryLink key={countryCode} countryCode={countryCode} />
    ))}
  </div>
)
