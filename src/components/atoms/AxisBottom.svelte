<script>
  // Props
  export let xScale
  export let innerHeight
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  line {
    stroke: $ui-black;
  }

  text {
    fill: $ui-black;
  }
</style>

{#each yScale.ticks() as tickValue}
  <g key={tickValue} transform={`translate(${yScale(tickValue)}, 0)`}>
    <line class="lines" y2={innerHeight} />
    <text y={innerHeight + 3} dy=".71em" style={{ textAnchor: 'middle' }}>
      <!-- {tickValue} -->
      <slot />
    </text>
  </g>
{/each}
