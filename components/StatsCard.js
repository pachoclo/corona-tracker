import separateThousands from '../util/separateThousands'
import styles from './StatsCard.module.css'

export default ({ stats }) => (
  <div className={styles.card}>
    <div className={styles.avatar}>
      <div className={styles.emoji}>{stats.emoji}</div>
      <div className={styles.title}>{stats.country}</div>
    </div>

    <div className={styles.stats}>
      <div>{separateThousands(stats.latest.confirmed)} <span className={styles.statName}>Confirmed</span></div>
      <div>{separateThousands(stats.latest.deaths)} <span className={styles.statName}>Deaths</span></div>
      <div>{separateThousands(stats.latest.recovered)} <span className={styles.statName}>Recovered</span></div>
    </div>
  </div>
)
