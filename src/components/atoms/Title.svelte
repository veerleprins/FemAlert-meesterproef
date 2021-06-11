<script>
  // Props
  export let isSubtitle = false
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  h1,
  h2 {
    font-family: $bold-font;
    color: $ui-black;
  }

  h1 {
    font-size: $h1-size;
  }

  h2 {
    font-size: $h2-size;
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
