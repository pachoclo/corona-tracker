import fetch from 'isomorphic-unfetch'
import StatsCard from '../components/StatsCard'
import GraphCard from '../components/GraphCard'
import Layout from '../components/Layout'
import LastUpdated from '../components/LastUpdated'

export default function Index ({ stats, lastUpdated }) {
  return (
    <Layout>
      <StatsCard stats={stats} /> 
      <GraphCard stats={stats} />
      <LastUpdated date={lastUpdated}/>
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
      stats: { latest: data.latest, country: 'World', emoji: '🌎' },
      lastUpdated: (new Date()).toLocaleString()
    }
  }
}
