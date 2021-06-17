<script>
  // Props
  export let isSubtitle = false
  export let sectionTitle = false
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  h1,
  h2 {
    font-family: $bold-font;
  }

  h1 {
    font-size: $h1-size;
  }

  h2 {
    font-size: $h2-size;
  }

  .sectionTitle {
    margin-left: 1em;
  }
</style>

{#if !isSubtitle}
  <h1 >
    <slot />
  </h1>
{:else}
  <h2 class:sectionTitle>
    <slot />
  </h2>
{/if}
