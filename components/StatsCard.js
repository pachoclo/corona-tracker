import separateThousands from '../util/separateThousands'

const styles = {
  card: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 12,
    boxShadow: '0px 4px 25px -14px rgba(125,125,125,1)',
    paddingTop: 15,
    paddingRight: 0,
    paddingBottom: 15,
    paddingLeft: 10,
    width: 380
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid lightgray',
    paddingLeft: 30,
    paddingRight: 40
  },
  stats: {
    flexGrow: 1,
    marginLeft: 20
  },
  emoji: {
    fontSize: 50,
    marginBottom: -28
  }
}

export default ({ stats }) => (
  <div style={styles.card}>
    <div style={styles.avatar}>
      <div style={styles.emoji}>{stats.emoji}</div>
      <h3>{stats.country}</h3>
    </div>

    <div style={styles.stats}>
      <p>{separateThousands(stats.latest.confirmed)} Confirmed Cases</p>
      <p>{separateThousands(stats.latest.deaths)} Deaths</p>
      <p>{separateThousands(stats.latest.recovered)} Recovered</p>
    </div>
  </div>
)
