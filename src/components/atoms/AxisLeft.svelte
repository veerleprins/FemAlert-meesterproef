<script>
  // Props
  export let yScale
  export let innerWidth
  export let ticks
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
        text-anchor: middle;
        font-family: $light-font;
      }
    }
  }
</style>

<g class="y-Axis">
  {#each ticks() as tickValue}
    <g transform={`translate(0, ${yScale(tickValue)})`}>
      <line x2={innerWidth} />
      <text x={-20} dy=".32em">{tickValue}</text>
    </g>
  {/each}
</g>
