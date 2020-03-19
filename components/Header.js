import Nav from "./Nav"

const h1Style = {
  fontWeight: 'normal',
  fontSize: '32px',
  fontFamily: 'Raleway',
  marginTop: 10
}

export const Header = () => (
  <div>
    <h1 style={h1Style}>CORONITO</h1>
    <Nav />
  </div>
)
