<script>
  // Props
  export let transform = ''
  export let x
  export let y
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  text {
    font-family: $standard-font;
    fill: $ui-body-color;
    text-anchor: middle;
  }
</style>

{#if transform !== ''}
  <text {y} {x} {transform}>
    <slot />
  </text>
{:else}
  <text {x} {y}>
    <slot />
  </text>
{/if}
