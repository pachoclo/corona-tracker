import fetch from 'isomorphic-unfetch'
import { Layout } from '../components/Layout'
import StatsCard from '../components/StatsCard'

export default function Index ({ stats }) {
  return (
    <Layout>
      <StatsCard stats={stats} />
    </Layout>
  )
}

export async function getStaticProps () {
  const res = await fetch(
    'https://coronavirus-tracker-api.herokuapp.com/v2/latest'
  )

  const data = await res.json()

  return {
    props: {
      stats: { latest: data.latest, country: 'World', emoji: '🌎' }
    }
  }
}
