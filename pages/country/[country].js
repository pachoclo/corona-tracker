import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout'
import { countryCodeList } from '../../components/Nav'
import getEmojiFlag from '../../util/getEmojiFlag'
import StatsCard from '../../components/StatsCard'

const flagStyle = {
  fontSize: 50,
  marginBottom: -30
}

const statsStyle = {
  marginTop: 30
}

const Country = stats => {
  const router = useRouter()

  return (
    <Layout>
      {router.isFallback ? <div>Loading...</div> : <StatsCard stats={stats} />}
    </Layout>
  )
}

export async function getStaticPaths () {
  const paths = countryCodeList.map(countryCode => `/country/${countryCode}`)
  return { paths, fallback: true }
}

export async function getStaticProps ({ params }) {
  const res = await fetch(
    `https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=${params.country}`
  )
  const data = await res.json()

  if (!data) {
    throw new Error(`${query.country} not found on the API.`)
  }

  return {
    props: {
      ...reduceCountryLocations(data),
      emoji: getEmojiFlag(params.country)
    }
  }
}

const reduceCountryLocations = countryData => {
  const initial = {
    latest: {
      deaths: 0,
      confirmed: 0,
      recovered: 0
    }
  }

  return countryData.locations.reduce(
    (acc, current) => ({
      ...current,
      latest: {
        deaths: acc.latest.deaths + current.latest.deaths,
        confirmed: acc.latest.confirmed + current.latest.confirmed,
        recovered: acc.latest.recovered + current.latest.recovered
      }
    }),
    initial
  )
}

export default Country
