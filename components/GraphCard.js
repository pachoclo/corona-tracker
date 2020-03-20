import styles from './GraphCard.module.css'
import Card from './Card'
import { ResponsivePie } from '@nivo/pie'

export default ({ stats }) => {
  const { title, latest } = stats

  return (
    <Card minHeight='400px' height='400px' >
    {/* <div className={styles.graphContainer}> */}
      <PieChart data={formatData(latest)} />
    {/* </div> */}
    </Card>
  )
}

const formatData = ({ confirmed, deaths, recovered }) => [
  {
    id: 'Recovered',
    label: 'Recovered',
    value: recovered
  },
  {
    id: 'Deaths',
    label: 'Deaths',
    value: deaths
  },
  {
    id: 'Confirmed',
    label: 'Confirmed',
    value: confirmed
  }
]

const PieChart = ({ data }) => {
  // TODO: add media query check here
  const isMobile = true

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 0, right: 30, bottom: 50, left: 30 }}
      innerRadius={0.5}
      padAngle={2.5}
      cornerRadius={3}
      colors={{ scheme: 'set2' }}
      borderWidth={0}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      enableRadialLabels={!isMobile}
      // radialLabelsSkipAngle={10}
      // radialLabelsTextXOffset={6}
      // radialLabelsTextColor='#333333'
      // radialLabelsLinkOffset={0}
      // radialLabelsLinkDiagonalLength={16}
      // radialLabelsLinkHorizontalLength={24}
      // radialLabelsLinkStrokeWidth={1}
      // radialLabelsLinkColor={{ from: 'color' }}
      sliceLabel='id'
      slicesLabelsSkipAngle={20}
      slicesLabelsTextColor={{ theme: 'background' }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: 45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'Confirmed'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'Recovered'
          },
          id: 'lines'
        }
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          translateY: 30,
          itemWidth: 85,
          itemHeight: 22,
          itemTextColor: '#444444',
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  )
}
