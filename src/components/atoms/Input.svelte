<script>
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
      padding-left: 20px;
    }
  }
</style>

<input {type} {name} {placeholder} class:searchBar />
