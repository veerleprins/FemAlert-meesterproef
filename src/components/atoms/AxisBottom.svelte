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
        stroke: $ui-stroke-color;
        text-anchor: middle;
      }
      text {
        font-family: $light-font;
        text-anchor: middle;
        fill: $ui-body-color;
        font-size: 1rem;
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
      <text dy="5em" x={-innerHeight - 15} transform="rotate(-70)">
        {tickValue}
      </text>
    </g>
  {/each}
  <g>
    <line x1={innerWidth} x2={innerWidth} y1={0} y2={innerHeight} />
  </g>
</g>
