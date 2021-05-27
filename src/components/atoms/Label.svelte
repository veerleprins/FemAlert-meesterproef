<script>
  // Props
  export let className
  export let yVal
  export let xVal
  export let transform
</script>

<style lang="scss">
</style>

<text class={className} y={yVal} x={xVal} {transform} textAnchor="middle">
  <slot />
</text>
