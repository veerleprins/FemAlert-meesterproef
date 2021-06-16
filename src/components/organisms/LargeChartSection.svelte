<script>
  // Externals
  import { scaleBand, scaleLinear, max } from 'd3'

  // Components
  import Title from '@/components/atoms/Title.svelte'

  // // Internals
  import {
    width,
    height,
    innerHeight,
    innerWidth,
    margin,
  } from '../../utils/constants'
  import { reportData } from '@/stores/dataStore.js'
  import { getCleanedChartData } from '../../utils/cleaning/clean.js'

  // Getting the data
  let rawData
  reportData.subscribe((value) => {
    rawData = value
  })
  const data = getCleanedChartData(rawData)
  console.log(data)

  const yValue = (d) => d.type // time - tijd
  const xValue = (d) => d.count // amount - aantal

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.2)

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
  section {
    margin: 2em 1.5em;
    padding: 1em;
    background-color: $ui-section;
    border-radius: 15px;
    height: 100%;
  }

  @include size-m {
    section {
      margin: 0;
    }
  }
</style>

<section>
  <Title isSubtitle>Aantal meldingen per uur</Title>
  <svg {width} {height}>
    <g transform={`translate(${margin.left},${margin.top})`}>
      <g class="x-Axis">
        <!-- xAs -->
      </g>
      <g class="y-Axis">
        <!-- yAs -->
      </g>
      <g class="bars">
        <!-- Bars -->
        {#each data as d}
          <rect
            x={0}
            y={yScale(yValue(d))}
            width={xScale(xValue(d))}
            height={yScale.bandwidth()}
          />
        {/each}
      </g>
    </g>
  </svg>
</section>
