<script>
  export let isPositive = false
  export let isNegative = false
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  p {
    font-size: 2em;
    font-weight: bold;
    color: $ui-black;
  }
  #positive {
    color: green;
  }
  #negative {
    color: red;
  }

</style>

{#if isPositive === false && isNegative === false}
  <p>
    <slot />
  </p>
  {:else if isPositive === true}
  <p id="positive">
    <slot />
  </p>
  {:else}
  <p id="negative">
    <slot />
  </p>
{/if}
