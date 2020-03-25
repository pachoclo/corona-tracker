import separateThousands from '../../util/separateThousands'
import styles from './StatsCard.module.css'
import Card from '../Card'

export default ({ stats }) => (
  <Card>
    <div className={styles.avatarContainer}>
      <div className={styles.emoji}>{stats.emoji}</div>
      <div className={styles.title}>{stats.country}</div>
    </div>

    <div className={styles.stats}>
      <div>
        <span className={styles.statValue}>
          {separateThousands(stats.latest.confirmed)}{' '}
        </span>
        <span className={styles.statName}>Confirmed</span>
      </div>

      <div>
        <span className={styles.statValue}>
          {separateThousands(stats.latest.deaths)}{' '}
        </span>
        <span className={styles.statName}>Deaths</span>
      </div>

      {/* <div>
        <span className={styles.statValue}>
          {separateThousands(stats.latest.recovered)}{' '}
        </span>
        <span className={styles.statName}>Recovered</span>
      </div> */}
    </div>
  </Card>
)
