<script>
  // Props
  export let URL = ''
  export let buttonTag = false
  export let isClicked = false
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  button,
  a {
    background-color: $ui-blue;
    border-radius: $borderSize;
    padding: 10px;
    text-decoration: none;
    border: none;
    color: $ui-white;
    cursor: pointer;
    width: 140px;
    height: 40px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.307);
    &.isClicked {
      box-shadow: none;
      background-color: white;
      color: black;
      cursor: initial;
    }
  }
</style>

{#if !buttonTag}
  <a href={URL}>
    <slot />
  </a>
{:else}
  <button class:isClicked>
    <slot />
  </button>
{/if}
