import { Layout } from '../../components/Layout'
import { useRouter } from 'next/router'
import upperFirst from 'lodash.upperfirst'
import fetch from 'isomorphic-unfetch'

const Country = ({ stats }) => {
  const router = useRouter()

  return (
    <Layout>
      <h3>{upperFirst(router.query.country)}</h3>

      <p>{stats.cases} Cases</p>
      <p>{stats.deaths} Deaths</p>
      <p>{stats.recovered} Recovered</p>
      <p>{stats.critical} Critical</p>

      <hr />
      <p>{stats.todayCases} New Cases Today</p>
      <p>{stats.todayDeaths} Deaths Today</p>
    </Layout>
  )
}

export async function getServerSideProps ({ query }) {
  const res = await fetch('https://corona.lmao.ninja/countries')
  const data = await res.json()

  const country = data.find(
    entry => entry.country.toLowerCase() === query.country
  )

  if (!country) {
    throw new Error(`${query.country} not found in our country list.`)
  }

  console.table(country)

  return {
    props: {
      stats: country
    }
  }
}

export default Country
