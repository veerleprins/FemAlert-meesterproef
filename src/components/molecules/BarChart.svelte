<script>
  // Externals
  import { scaleBand, scaleLinear, max } from 'd3'

  // Components
  import Bars from '@/components/atoms/Bars.svelte'
  import AxisBottom from '@/components/atoms/AxisBottom.svelte'
  import AxisLeft from '@/components/atoms/AxisLeft.svelte'
  import AxisLabel from '@/components/atoms/AxisLabel.svelte'

  // Internals
  import { height, innerHeight, margin } from '@/utils/constants'
  import { reportData } from '@/stores/dataStore.js'
  import { getCleanedChartData } from '@/utils/cleaning/getBarData.js'

  // Props
  export let width

  // Data
  let rawData
  reportData.subscribe((value) => {
    rawData = value
  })
  const data = getCleanedChartData(rawData)

  // Functions
  const yValue = (d) => d.count // amount
  const xValue = (d) => d.type // time

  $: yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0])

  $: xScale = scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.2)

  $: ticks = () => {
    let tickArray = []
    let [minValue, maxValue] = yScale.domain()
    for (let i = minValue; i <= maxValue; i++) {
      tickArray.push(i)
    }
    return tickArray
  }

  $: correctedWidth = width - 80
  $: innerWidth = width - (margin.left + margin.right)
</script>

<svg width={correctedWidth + margin.left + margin.top} {height}>
  <g transform={`translate(${margin.left},${margin.top})`}>
    <AxisBottom {xScale} {innerHeight} {innerWidth} />
    <AxisLeft {yScale} {innerWidth} {ticks} />
    <AxisLabel transform={`rotate(-90)`} x={-innerHeight / 2} y={-45}>
      Aantal meldingen
    </AxisLabel>
    <AxisLabel x={innerWidth / 2} y={innerHeight + 70}>Tijd in uren</AxisLabel>
    <Bars {data} {innerHeight} {xScale} {yScale} {xValue} {yValue} />
  </g>
</svg>
