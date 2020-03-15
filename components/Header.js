import Nav from "./Nav"

const h1Style = {
  fontWeight: 'normal',
  fontSize: '46px',
  fontFamily: 'Raleway'
}

export const Header = () => (
  <div>
    <Nav />
    <h1 style={h1Style}>Coronito covid-19 Tracker</h1>
  </div>
)
