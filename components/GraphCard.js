import styles from './GraphCard.module.css'
import Card from './Card'

export default ({ stats }) => {
  const { title, latest } = stats
  const { confirmed, deaths, recovered } = latest

  return (
    <Card>
      <p>{confirmed} Confirmed</p>
      <p>{deaths} Deaths</p>
      <p>{recovered} Recovered</p>
    </Card>
  )
}
