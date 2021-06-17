<script>
  // Props
  export let data
  export let innerHeight
  export let xScale
  export let yScale
  export let yValue
  export let xValue
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  g {
    rect {
      fill: #779b9b;
    }
  }
</style>

<g>
  {#each data as d}
    <rect
      x={xScale(xValue(d))}
      y={yScale(yValue(d))}
      height={innerHeight - yScale(yValue(d))}
      width={xScale.bandwidth()}
    />
  {/each}
</g>
