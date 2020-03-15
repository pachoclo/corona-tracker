import Link from 'next/link'

const linkStyle = {
  marginRight: 5,
  textDecoration: 'none',
  fontSize: 20
}

const Nav = () => (
  <div>
    <Link href='/'>
      <a style={linkStyle}>🌎</a>
    </Link>
    | {}
    <Link href='/country/[country]' as='/country/Canada'>
      <a style={linkStyle}>🇨🇦</a>
    </Link>
    | {}
    <Link href='/country/[country]' as='/country/Colombia'>
      <a style={linkStyle}>🇨🇴</a>
    </Link>
    | {}
    <Link href='/country/[country]' as='/country/China'>
      <a style={linkStyle}>🇨🇳</a>
    </Link>
    | {}
    <Link href='/country/[country]' as='/country/USA'>
      <a style={linkStyle}>🇺🇸</a>
    </Link>
  </div>
)

export default Nav
