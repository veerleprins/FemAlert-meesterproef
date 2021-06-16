<script>
  // Externals
  import { scaleBand, scaleLinear, max } from 'd3'

  // Components
  import Title from '@/components/atoms/Title.svelte'

  // // Internals
  import { height, innerHeight, margin } from '@/utils/constants.js'
  import { reportData } from '@/stores/dataStore.js'
  import { getCleanedChartData } from '@/utils/cleaning/clean.js'

  // Getting the data
  let width
  let rawData
  reportData.subscribe((value) => {
    rawData = value
  })
  const data = getCleanedChartData(rawData)

  const yValue = (d) => d.count // amount - aantal
  const xValue = (d) => d.type // time - tijd

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

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
  section {
    margin: 2em 1.5em;
    padding: 1em;
    background-color: $ui-section;
    border-radius: 15px;
    height: 100%;
    svg {
      g {
        text {
          text-anchor: middle;
          font-family: $light-font;
        }
        g {
          g {
            line {
              stroke: #c9c9c9;
              text-anchor: middle;
            }
            text {
              text-anchor: middle;
            }
          }
        }
        rect {
          fill: #779b9b;
        }
      }
    }
  }

  @include size-m {
    section {
      margin: 0;
    }
  }
</style>

<section bind:clientWidth={width}>
  <Title isSubtitle>Aantal meldingen per uur</Title>
  <svg width={correctedWidth + margin.left + margin.top} {height}>
    <g transform={`translate(${margin.left},${margin.top})`}>
      <g class="x-Axis">
        <!-- xAs -->
        <g>
          <line x1={0} x2={0} y1={0} y2={innerHeight} />
        </g>
        {#each xScale.domain() as tickValue}
          <g
            transform={`translate(${xScale(tickValue) + xScale.bandwidth() / 2}, 0)`}
          >
            <line y1={0} y2={innerHeight} />
            <text dy=".41em" y={innerHeight + 10}>{tickValue}</text>
          </g>
        {/each}
        <g>
          <line x1={innerWidth} x2={innerWidth} y1={0} y2={innerHeight} />
        </g>
      </g>
      <g class="y-Axis">
        <!-- yAs -->
        {#each ticks() as tickValue}
          <g transform={`translate(0, ${yScale(tickValue)})`}>
            <line x2={innerWidth} />
            <text x={-20} dy=".32em">{tickValue}</text>
          </g>
        {/each}
      </g>
      <text y={-45} x={-innerHeight / 2} transform={`rotate(-90)`}>
        Aantal meldingen
      </text>
      <text x={innerWidth / 2} y={innerHeight + 40}>Tijd in uren</text>
      <g class="bars">
        <!-- Bars -->
        {#each data as d}
          <rect
            x={xScale(xValue(d))}
            y={yScale(yValue(d))}
            height={innerHeight - yScale(yValue(d))}
            width={xScale.bandwidth()}
          />
        {/each}
      </g>
    </g>
  </svg>
</section>
