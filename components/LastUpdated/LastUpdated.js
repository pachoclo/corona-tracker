import styles from './LastUpdated.module.css'

export default ({ date }) => (
  <div className={styles.lastUpdated}>▹ Last updated: {date}</div>
)
