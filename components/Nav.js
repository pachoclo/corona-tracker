import Link from 'next/link'
import getEmojiFlag from '../util/getEmojiFlag'

const linkStyle = {
  marginRight: 5,
  textDecoration: 'none',
  fontSize: 20
}

export const countryCodeList = ['CA', 'CO', 'CN', 'US', 'IT', 'IR']

const CountryLink = ({ countryCode }) => (
  <Link href='/country/[country]' as={`/country/${countryCode}`}>
    <a style={linkStyle}>{getEmojiFlag(countryCode)}</a>
  </Link>
)

const Nav = () => (
  <div>
    <Link href='/'>
      <a style={linkStyle}>🌎</a>
    </Link>

    {countryCodeList.map(countryCode => (
      <>
        | {}
        <CountryLink key={countryCode} countryCode={countryCode} />
      </>
    ))}
  </div>
)

export default Nav
