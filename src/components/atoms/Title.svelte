<script>
  // Props
  export let isSubtitle = false
  export let sectionTitle = false
  export let smallSectionTitle = false
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  h1,
  h2 {
    font-family: $bold-font;
    color: $ui-body-color;
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

  .smallSectionTitle {
    align-self: flex-start;
  }
</style>

{#if !isSubtitle}
  <h1 >
    <slot />
  </h1>
{:else}
  <h2 class:sectionTitle class:smallSectionTitle>
    <slot />
  </h2>
{/if}
