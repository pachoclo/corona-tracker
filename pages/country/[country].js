import { Layout } from '../../components/Layout'
import { useRouter } from 'next/router'
import upperFirst from 'lodash.upperfirst'
import fetch from 'isomorphic-unfetch'

const Country = ({ stats }) => {
  const router = useRouter()

  return (
    <Layout>
      <h3>{upperFirst(router.query.country)}</h3>

      <p>{stats.cases.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} Cases</p>
      <p>{stats.deaths.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} Deaths</p>
      <p>{stats.recovered.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} Recovered</p>
      <p>{stats.critical.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} Critical</p>

      <hr />
      <p>{stats.todayCases.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} New Cases Today</p>
      <p>{stats.todayDeaths.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} Deaths Today</p>
    </Layout>
  )
}

export async function getServerSideProps ({ query }) {
  const res = await fetch('https://corona.lmao.ninja/countries')
  const data = await res.json()

  const country = data.find(
    entry => entry.country.toLowerCase() === query.country.toLowerCase()
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
