import fetch from 'isomorphic-unfetch'
import { Layout } from '../components/Layout'

const emojiStyle = {
  fontSize: 50,
  marginBottom: -30
}

const statsStyle = {
  marginTop: 30
}

export default function Index ({ stats }) {
  return (
    <Layout>
      <div style={emojiStyle}>🌎</div>
      <h2>World</h2>

      <div>
        <p>{stats.confirmed} Confirmed Cases</p>
        <p>{stats.deaths} Deaths</p>
        <p>{stats.recovered} Recovered</p>
      </div>
    </Layout>
  )
}

export async function getStaticProps () {
  const res = await fetch(
    'https://coronavirus-tracker-api.herokuapp.com/v2/latest'
  )
  const data = await res.json()

  console.table(data.latest)

  return {
    props: {
      stats: data.latest
    }
  }
}
