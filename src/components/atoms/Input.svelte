<script>
  // Components
  import Icons from '@/components/atoms/Icons.svelte'
  // Props
  export let type
  export let name
  export let placeholder
  export let searchBar = false
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';

  input {
    &.searchBar {
      width: 100%;
      border: none;
      border-radius: $borderSize;
      height: 40px;
      padding-left: 1rem;
    }
  }

  div {
    position: relative;
    input[type='text'] {
      padding-left: 2.5rem;
    }
  }
</style>

{#if searchBar}
  <div>
    <Icons iconType="search" searchIcon />
    <input {type} {name} {placeholder} class:searchBar />
  </div>
{:else}<input {type} {name} {placeholder} />{/if}
