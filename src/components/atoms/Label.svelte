<script>
  // Props
  export let name
  export let label
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';

  label {
    display: block;
  }

  @include size-m {
    label {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<label for={name}>
  {label}
  <slot />
</label>
