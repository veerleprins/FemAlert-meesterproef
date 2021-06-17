<script>
  // Props
  export let href
  export let isClickable = false
  export let isNav = false
  let active = true
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  li {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &.isNav {
      height: 50px;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }
    &.active {
      font-family: $bold-font;
      border-bottom: 1px solid $ui-blue;
    }
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
  <li class:isNav class:active>
    <a {href}><slot /></a>
  </li>
{:else}
  <li>
    <slot />
  </li>
{/if}
