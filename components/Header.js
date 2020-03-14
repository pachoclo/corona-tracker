import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export const Header = () => (
  <div>
    <Link href='/'>
      <a style={linkStyle}>World</a>
    </Link>

    <Link href='/country/[country]' as='/country/canada'>
      <a style={linkStyle}>Canada</a>
    </Link>
  </div>
)
