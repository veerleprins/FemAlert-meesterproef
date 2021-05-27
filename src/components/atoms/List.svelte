<script>
  // Props
  export let href
  export let isClickable = false
</script>

<style lang="scss">
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
