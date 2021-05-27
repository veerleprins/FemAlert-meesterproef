<script>
  // Props
  export let className
  export let yVal
  export let xVal
  export let transform
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  text {
    fill: $ui-black;
  }
</style>

<text class={className} y={yVal} x={xVal} {transform} textAnchor="middle">
  <slot />
</text>
