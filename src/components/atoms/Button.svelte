<script>
  // Props
  export let URL = ''
  export let buttonTag = false
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  button,
  a {
    background-color: $ui-blue;
    border-radius: $borderSize;
    padding: 0.5em 3em;
    text-decoration: none;
    border: none;
    color: $ui-white;
  }
</style>

{#if !buttonTag}
  <a href={URL}>
    <slot />
  </a>
{:else}
  <button>
    <slot />
  </button>
{/if}
