import { ResponsiveBar } from '@nivo/bar'
import Card from '../Card'
import separateThousands from '../../util/separateThousands'

const BarChart = ({ stats }) => {
  // let { confirmed, deaths, recovered } = stats.latest
  let { confirmed, deaths } = stats.latest

  let data = {
    // recovered,
    dead: deaths,
    sick:  confirmed - deaths,
    country: stats.country
  }

  return (
    <Card height={'350px'}>
      <Chart data={data} />
    </Card>
  )
}

const colorMap = {
  dead: '#fc8d62',
  sick: '#8da0cb'
}

const Chart = ({ data }) => (
  <ResponsiveBar
    minValue={0}
    data={[data]}
    keys={['dead', 'sick']}
    indexBy='country'
    margin={{ top: 15, right: 120, bottom: 40, left: 90 }}
    padding={0.3}
    colors={data => colorMap[data.id]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0,
      legendPosition: 'middle',
      legendOffset: 22
    }}
    axisLeft={{
      tickSize: 0,
      tickPadding: 2,
      tickRotation: 0,
      legend: 'Confirmed',
      legendPosition: 'middle',
      legendOffset: -60,
      format: label => separateThousands(label)
    }}
    labelFormat={label => separateThousands(label)}
    labelSkipHeight={25}
    labelTextColor={{ from: 'color', modifiers: [['darker', 3]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
)

export default BarChart
