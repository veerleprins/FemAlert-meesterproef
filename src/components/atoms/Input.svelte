<script>
  // Props
  export let type
  export let name
  export let label
  export let value

</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

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
    section {
      grid-template-columns: 1fr 3fr;

      input {
        line-height: 2em;
        width: 20em;
      }
    }
  }
</style>

<section>
  <label for {name}>{label}</label>
  <input {type} {name} {value}/>

</section>
