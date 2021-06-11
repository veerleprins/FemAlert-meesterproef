<script>
  // Props
  export let href
  export let isClickable = false
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  li {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  a {
    color: $ui-black;
    text-decoration: none;
    // &:visited {
    //   color: #ffffff;
    // }
  }
</style>

{#if !isClickable}
  <li>
    <a {href}><slot /></a>
  </li>
{:else}
  <li>
    <slot />
  </li>
{/if}
