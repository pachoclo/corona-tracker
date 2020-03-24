import Link from 'next/link'
import getEmojiFlag from '../../util/getEmojiFlag'
import styles from './Nav.module.css'

export const countryCodeList = ['CN', 'CA', 'CO', 'IT', 'IR', 'FR', 'GB', 'JP', 'US', 'ES']

const CountryLink = ({ countryCode }) => (
  <Link href="/country/[country]" as={`/country/${countryCode}`}>
    <a className={styles.linkStyle}>{getEmojiFlag(countryCode)}</a>
  </Link>
)

const WorldLink = () => (
  <Link href="/">
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
