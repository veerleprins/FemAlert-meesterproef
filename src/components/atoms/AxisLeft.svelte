<script>
  // Props
  export let yScale
  export let innerWidth
  export let tickFormat
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
  <g key={tickValue} transform={`translate(0, ${yScale(tickValue)})`}>
    <line class="lines" x2={innerWidth} />
    <text x={-3} dy=".32em" style={{ textAnchor: 'end' }}>
      <!-- {tickFormat(tickValue)} -->
      <slot />
    </text>
  </g>
{/each}
