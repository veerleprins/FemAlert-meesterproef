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
      display: grid;
      grid-template-columns: 1fr 5fr;
      div:first-of-type {
        grid-column: 1;
      }
      div:nth-of-type(2) {
        grid-column: 2;
        width: 100%;
      }
    }
  }

</style>

<label for={name}>
  <div>
    {label}
  </div>
  <div>
    <slot/>
  </div>
</label>