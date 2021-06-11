<script>
  // Components
  import Icons from '@/components/atoms/Icons.svelte'

  // Props
  export let type
  export let name
  export let placeholder
  export let value
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

  input:not(.searchBar) {
    width: 100%;
  }

  div {
    position: relative;
    input[type='text'] {
      padding-left: 2.5rem;
    }
  }

  section {
    display: grid;
    grid-template-columns: 1fr 2fr;
    label {
      padding-left: 0.5em;
    }
    input {
      border: 1px solid $ui-accent-grey;
      border-radius: 5px;
      line-height: 1.5em;
      padding-left: 0.5em;
    }
  }
  @include size-m {
    input:not(.searchBar) {
      width: 50%;
    }
  }
</style>

{#if searchBar}
  <div>
    <Icons iconType="search" searchIcon />
    <input {type} {name} {placeholder} class:searchBar />
  </div>
{:else}<input {type} {name} {value} {placeholder}/>{/if}
