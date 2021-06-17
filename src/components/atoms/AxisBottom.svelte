<script>
  // Props
  export let xScale
  export let innerHeight
  export let innerWidth
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  g {
    g {
      line {
        stroke: #c9c9c9;
        text-anchor: middle;
      }
      text {
        font-family: $light-font;
        text-anchor: middle;
        fill: black;
      }
    }
  }
</style>

<g>
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
