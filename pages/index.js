import { Layout } from '../components/Layout'
import fetch from 'isomorphic-unfetch'

export default function Index ({ stats }) {
  return (
    <Layout>
      <h1> 🦠 Coronito COVID-19 Tracker  🕵🏻‍♂️</h1>

      <h3>🌎 World</h3>
      
      <p>{stats.cases} Cases</p>
      <p>{stats.deaths} Deaths</p>
      <p>{stats.recovered} Recovered</p>
    </Layout>
  )
}

export async function getServerSideProps () {
  const res = await fetch('https://corona.lmao.ninja/all')
  const data = await res.json()

  console.table(data)

  return {
    props: {
      stats: data
    }
  }
}
