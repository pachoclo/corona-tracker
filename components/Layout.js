import { Header } from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
)
