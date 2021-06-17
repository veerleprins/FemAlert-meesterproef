<script>
  export let isPositive = false
  export let isNegative = false
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  p {
    font-size: 1.5em;
    font-weight: bold;
    color: $ui-black;
  }
  #positive {
    color: #ff0000;
    font-size: 1em;
    font-weight: 100;
  }
  #negative {
    color: #44ff00;
    font-size: 1em;
    font-weight: 100;
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
