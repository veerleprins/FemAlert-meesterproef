<script>
  // Props
  export let isSubtitle = false
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  h1 {
    font-size: 2em;
    color: $ui-black;
  }

  h2 {
    font-size: 1.5em;
  }
</style>

{#if !isSubtitle}
  <h1>
    <slot />
  </h1>
{:else}
  <h2>
    <slot />
  </h2>
{/if}
