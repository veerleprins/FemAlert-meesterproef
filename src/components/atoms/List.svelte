<script>
  // Props
  export let href
  export let isClickable = false
</script>

<style lang="scss">
  a,
  a:visited {
    color: #FFFFFF;
    text-decoration: none;
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
